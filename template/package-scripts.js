/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */
module.exports = {
  scripts: {
    default: 'build',
    serve: './node_modules/.bin/vue-cli-service serve --open',
    build: './node_modules/.bin/vue-cli-service build',
    {{#lint}}
    lint: './node_modules/.bin/vue-cli-service lint'{{#if_or unit e2e}},{{/if_or}}
    {{/lint}}
    {{#if_or unit e2e}}
    test: {
      {{#if_eq runner "jest"}}
      unit: 'jest --config test/unit/jest.conf.js --coverage'{{#e2e}},{{/e2e}}
      {{/if_eq}}
      {{#if_eq runner "karma"}}
      unit: '"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run'{{#e2e}},{{/e2e}}
      {{/if_eq}}
      {{#e2e}}
      e2e: 'node test/e2e/runner.js'
      {{/e2e}}
    }
    {{/if_or}}
  }
};
