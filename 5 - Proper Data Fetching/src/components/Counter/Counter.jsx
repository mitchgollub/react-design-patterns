import React, { Component } from 'react'
import number from 'prop-types'
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        };

        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    static propTypes = {
        counter: number
    }

    handleDecrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }
    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <Display counter={this.state.counter} />
                <Buttons
                    onDecrement={this.handleDecrement}
                    onIncrement={this.handleIncrement}
                />
            </div>
        );
    }
}
