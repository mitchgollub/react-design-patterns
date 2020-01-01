# 10 - About Testing and Debugging

In this chapter we'll cover:

- Setting up a Jest environment using Enzyme
- Testing a component

## Jest and Enzyme

[Jest](https://jestjs.io/) is a Javascript testing framework with a focus on simplicity.  To write tests using ES2015 and JSX, we have to install Babel packages so Jest can use them to transpile and understand our code.

[Enzyme](https://airbnb.io/enzyme/) is a toolset of Javascript testing utilities maintained by AirBnB.  It allows for testing Component output, rendering, and traversal of the DOM.

### Install

#### Jest

`npm install --save-dev jest`

Add scripts to `package.json`

```javascript
"scripts": {
    ...
    "test": "jest",
    "test:coverage": "jest --coverage"
}
```

#### Babel

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-jest`

Create `.babelrc`

```javascript
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

#### Enzyme

`npm install --save-dev enzyme enzyme-adapter-react-16`

### Test Configuration

Add a `jest` configuration to `package.json`

```javascript
{
    ...
    "jest": {
        "setupFilesAfterEnv": [
            "<rootDir>/jest/setupTestFramework.js"
        ],
        "collectCoverageFrom": [
            "src/**/*.{js,jsx}"
        ]
    }
}
```

Create the `jest/setupTestFramework.js` file.

```javascript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

### Testing

See [src/components/Hello.jsx](src/components/Hello.jsx).

To test this component, a file with the same name with a `.test.` suffix is required.  Jest recommends using a `__tests__` folder at the root to keep your tests out of your source.  See [__tests__/Hello.test.js](__tests__/Hello.test.js).

Run `npm test` for running Jest, and `npm run test:coverage` to run Jest with a Coverage report output.
