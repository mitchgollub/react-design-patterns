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

See [JSONSchemaForm.js](components/JSONSchemaForm.js)
