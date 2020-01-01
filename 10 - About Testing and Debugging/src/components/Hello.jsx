import React from 'react';

const Hello = props => (
    <h1 className="Hello">Hello {props.name || 'World' }</h1>
);

export default Hello;