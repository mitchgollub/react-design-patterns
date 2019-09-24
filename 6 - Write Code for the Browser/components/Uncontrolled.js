import React, { Component } from 'react'

export default class Uncontrolled extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.firstName} ${this.state.lastName}`);
    }

    render() {
        return (
            <form>
                <input type='text' name="firstName" onChange={this.handleChange} />
                <input type='text' name="lastName" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}
