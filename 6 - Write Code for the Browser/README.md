# 6 - Write Code for the Browser

In this chapter we will go over the following topics:

- Using different techniques to create forms with React
- Listening to DOM events and implementing custom handlers
- A way of performing imperative
- Creating simple animations that work across the different browsers
- The React way of generating SVGs

## Forms

### Uncontrolled Components

An uncontrolled component is a component where we let the component manage its own internal state.

```javascript
const uncontrolled = () => {
    return (
        <form>
            <input type='text' />
            <button>Submit</button>
        </form>
    );
}
```

### Controlled Components

A controlled component is designed to have full control over the value of the fields.

### JSON Schema Forms

Using `react-jsonschema-form` allows us to avoid writing a lot of boilerplate.  This is a library maintained by Mozilla.

`npm i --save react-jsonschema-form`

See [JSONSchemaForm.js](src/components/JSONSchemaForm.js)

## Handling Events

Events work in a slightly different way across various browsers.  React attempts to abstract these differences to give developers a consistent interface.

React acheives this abstract using **synthetic events**.  A **Synthetic Event** is an object that wraps the original event object provided by the browser, and has the same properties no matter where is it created.

See [Button.js](src/components/Button.js)

### Best Practice: Performance

React uses a single global handler for DOM events from the browser.  This means that we cannot store a synthetic event and reuse it later because it will become `null` right after the initial action.  This design is good for performance, but can pose a problem when trying to store the event for later reference.  React provides a `persist()` method on the synthetic events to make the event persistent for later retrieval.

## Animations

### React Libraries

- `react-addons-css-transistion-group`
- `react-motion`
