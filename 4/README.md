# React Design Patterns

## Children

`children` is a special prop that can be passed from the owners to the components.  This prop is described as opaque because it does not tell you anything about the value that it contains.

```javascript
import { oneOfType, array, element } from 'prop-types';

const Button = ({ children }) => (
    <button className="btn">{children}</button>
);

// oneOfType and element required only if one element can be passed through
Button.propTypes = {
    children: oneOfType([
        array,
        element
    ])
}

// Usage
<Button>
    <img src="..." alt="..." />
    <span>Click Me!</span>
</Button>
```

## Container and Presentational Pattern

### Container Logic is anything unrelated to the UI such as API calls, data manipulation, and event handlers

### Presentation is the code inside the `render` method where elements are created and displayed in the UI

In this pattern, every component is split into two smaller ones, each one with its clear responsibilities.

The container knows everything about the logic of the component.  The presentational component is where the UI is defined.  It receives data in the form of props from the container.  Since the presentation component is usually logic-free, we can create it as a functional component.

### Best Practice: Maintainability

It is widely used (but not a strict rule) in the React community to append `Container` to the end of the Container component name and give the original name to the presentational one.  

## High Order Components

High order functions are functions that, given a function, enhance it with some extra behaviors, returning a new one.

High order Components are functions that aim to achieve the same pattern over components.

```javascript
const HoC = Component => EnhancedComponent;
```

An example would be if you want an attribute to appear on multiple components such as `className`.  You could write an HoC such as the one below:

```javascript
const withClassName = Component => props => (
    <Component {...props} className="my-class" />
);
```

### Best Practice: Informational

It is common practice to prefix HoCs that provide some information to the components they enhance using the *with* pattern.

### Recompose library

The Recompose library provides many useful HoCs that are small utilities that we can use to wrap our components, moving away from some of their logic.

`flattenProp()`

```javascript
const Profile = ({ username, age }) => (
    <div>
        <div>Username: {username}</div>
        <div>Age; {age}</div>
    </div>
);
Profile.propTypes = {
    username: string,
    age: number
};

// Usage - wrapping the component with the function
const withFlattenUser = flattenProp('user');
const ProfileWithFlattenUser = withFlattenUser(Profile);

// OR
const ProfileWithFlattenUser = flattenProp('user')(Profile);
```

`renameProp()`

```javascript
const enhance = compose(
    flattenProp('user'),
    renameProp('username', 'name')
);

// Combine HoC's (from Recompose or custom) with compose
const EnhancedProfile = enhance(Profile);
```

### Best Practice: Performance

While the abstraction provided by HoCs make code much more readable and organized, HoCs should be used with caution.  The trade off for using HoCs is in performance.  Wrapping a component into a higher order one adds a new render function, a new life cycle method call, and memory allocation.

## Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.  It provides a way to pass data through the component tree without having to pass props down manually at every level.

HoCs can be used to get the benefits of React Context without coupling our components to the Context API:

```javascript
const Price = ({ currency, value }) => (
    <div>{currency}{value}</div>
);
Price.propTypes = {
    currency: string,
    value: number
};

// getContext is a wrapper available in Recompose, but you can write a custom wrapper if you want to avoid pulling in the whole library
const withCurrency = getContext({
    currency: string
});

const PriceWithCurrency = withCurrency(Price);
```
