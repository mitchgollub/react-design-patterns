import React from 'react'
import Form from 'react-jsonschema-form';

const schema = {
    type: 'object',
    properties: {
        firstName: { type: 'string', default: 'Mitch' },
        lastName: { type: 'string', default: 'Gollub' }
    }
};

export default class JSONSchemaForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({ formData }) {
        console.log(formData);
    }

    render() {
        return (
            <Form schema={schema} onSubmit={this.handleSubmit} />
        );
    }
}