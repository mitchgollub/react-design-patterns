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
