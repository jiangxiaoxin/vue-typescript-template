/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */
module.exports = {
  scripts: {
    default: 'webpack',
    webpack: {
      default: 'webpack.dev',
      dev: 'webpack-dev-server --inline --progress --config build/webpack.dev.conf.js'
    },
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
    },
    {{/if_or}}
    {{#lint}}
    lint: 'eslint --ext .js,.vue src{{#unit}} test/unit{{/unit}}{{#e2e}} test/e2e/specs{{/e2e}}',
    {{/lint}}
    build: 'node build/build.js'
  }
};
