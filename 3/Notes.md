# React Design Patterns

## Layouts

Components can be separated out into folders for organization.  Here we have a layout folder to hold UI components that organize the parts of the web page.  The outline of the page is as follows:

- Header
- Content
- Footer

We're using the prop-types library to warn about any validation errors when passing data to a component.  Be careful because this will not be shown at compile time or break any builds.  **NOTE** The validation errors only show in the dev console on your web browser.

### Best Practice: Maintainability

Passing primitive props to a component is easier to validate and compare than passing objects.  Using primitive props help use find whether a component surface is too wide and whether or not it should be split into smaller surfaces.  If we realize that we are declaring too many props for a single component, it may be better to create multiple vertical components.

If passing an object to a component is unavoidable, use the `shape()` function:

Using standard validators

```javascript
import { share, string } from 'prop-types';
const Profile = ({ user }) =>  (
    <div>{user.name} {user.surname}</div>
);

Profile.propTypes = {
    user: shape({
        name: string.isRequired,
        surname: string
    }).isRequired
};
```

Using custom validators

```javascript
Profile.propTypes = {
    user: shape({
        age: (props, propName) => {
            if (!(props[propName] > 0 && props[propName] < 100)) {
                return new Error(`${propName} must be between 1 and 99`);
            }
        }
};
```

## State

State libraries in the React base library are asynchronous.  There is no guarantee of synchronous operations

```javascript
handleClick() {
    this.setState({
        clicked: true
    });
    console.log('the state is now ', this.state);
}
```

Log reads: `the state is now null`

```javascript
handleClick() {
    setTimeout(() => {
        this.setState({
            clicked: true
        })
    console.log('the state is now ', this.state);
    });
}
```

Log reads: `the state is now Object {clicked: true}`

In the second example, React does not have any way to optimize the execution and it tries to update the state as soon as possible.
You should never write event handlers with setTimeout, this is just for demonstration.

If multiple components need to keep track of the same information, we should consider using a state manager such as **Redux** at the application level.

### Best Practice: Performance

- Only the minimal amount of data needed should be put into the state.  For example if we have to change a label when a button is clicked, we should not store the text of the label, but we should only save a Boolean flag that tells us if the button has been clicked or not.  

- Avoid using state to store any data where the final value can be computed from the props.

- Setting the state causes the component to re-render.  Only store in the state those values that we are using inside the render method.  

## Hooks

New feature in React 16.8 that lets you use state, and other React features without writing a class component.  

```javascript
import React, { useState } from 'react';

function Counter() {
  // times is our new state variable and setTimes the function to update that state.
  const [times, setTimes] = useState(0);

  return (
    <div className="Times">
      <p>Times clicked: {times}</p>
      <button onClick={() => setTimes(times + 1)}>Click it!</button>
    </div>
  );
}

export default Counter;
```

## React Docgen

The `react-docgen` package allows for programmatic generation of component documentation in JSON format.

```javascript
/**
 * Generic H1 Header with text.
 */
const Header = ({ title }) => (
    <header className="App-header">
        <h1>{title}</h1>
    </header>
);

Header.propTypes = {
    /**
     * The text of the Header.
     */
    title: string.isRequired
};
```

Output

```javascript
{
    "description": "Generic H1 Header with text.",
    "displayName": "Header",
    "methods": [],
    "props": {
        "title": {
            "type": {
                "name": "string"
            },
            "required": true,
            "description": "The text of the Header."
        }
    }
}
```
