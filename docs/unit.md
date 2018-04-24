# Unit Testing

This project offers two options for unit testing:

1. Jest


## Jest

- [Jest](https://facebook.github.io/jest/): the test runner that launches JSDOM runs the tests and reports the results to us.

### Files

- `setup.js`

  Jest runs this file before it runs the unit tests. It sets the Vue production tip to false.

### Mocking Dependencies

The Jest boilerplate comes with the ability to mock dependencies. See the [mock functions guide](https://facebook.github.io/jest/docs/mock-functions.html) for more details.