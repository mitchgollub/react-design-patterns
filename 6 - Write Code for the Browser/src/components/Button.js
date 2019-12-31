import React, { Component } from "react";

export default class Button extends Component {
    constructor(props) {
        super(props)

        // Bind the event handler function to the React Component
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(syntheticEvent) {
        // Avoid writing additional boilerplate by writing a single
        // event handler.
        // https://reactpatterns.com/#event-switch : Michael Chan
        switch (syntheticEvent.type) {
            case 'click':
                console.log('clicked');
                console.log(syntheticEvent instanceof MouseEvent); // False
                console.log(syntheticEvent.nativeEvent instanceof MouseEvent); // True
                break;
            case 'dblclick':
                console.log('double clicked');
                break;
            default:
                console.log('unhandled', syntheticEvent.type);
        }
    }

    // Declare the event listeners on the DOM
    render() {
        return (
            <button
                onClick={this.handleEvent}
                onDoubleClick={this.handleEvent}
            >Click Me!</button>
        );
    }
};