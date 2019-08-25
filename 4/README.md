# React Design Patterns

## Childen

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

