# 6 - Make Your Components Look Beautiful

In this chapter we will go over the following topics:

- Styling best practices in React
- Radium Library
- Webpack & CSS Modules
- Styled Components Library

## CSS Styling Best Practices

The official React documentation recommends developers use inline styles to style their React components.  

We can apply styles using the style attribute like this:

```javascript
const style = {
    color: 'cornflowerblue',
    backgroundColor: 'papayawhip'
};
const Button = () => <button style={style}>Click Me!</button>;
```

## Radium

Radium is a library that extends the CSS style capabilities of the style attribute exposed by React to allow for the use of pseudo-classes, media queries, and other CSS features.

### Install
`npm install --save radium`

### Usage

Radium is used as an HOC which extends the functionalities of a Component.

```javascript
import radium from 'radium';
const Button = () => <button>Click Me!</button>;
export default radium(Button);
```

#### Pseudo-classes

```javascript
const styles = {
    color: '#ff0000',
    ':hover': {
        color: '#0000ff'
    }
};
```

#### Media Queries

```javascript
const styles = {
    color: '#ff0000',
    '@media (max-width: 480px)': {
        color: '#0000ff'
    }
};
```

#### StyleRoot

Radium also provides a StyleRoot Component to avoid flickering between the styles that are applied to the document before the library figures out which is the matching query.

```javascript
import {StyleRoot} from 'radium';
class App extends Component {
    render() {
        return (
            <StyleRoot>
                ...
            </StyleRoot>
        );
    }
}
```
