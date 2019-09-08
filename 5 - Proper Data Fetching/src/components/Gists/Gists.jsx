import React, { Component } from 'react'
import array from 'prop-types'

export default class Gists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gists: []
        }
    }

    // We're using componentDidMount here to be sure that the API call is
    // called on the browser only.
    // componentWillMount would be suitable to be able to load the data as
    // soon as we can, but 
    // componentWillMount is also fired for server-side rendering.  Firing an
    // async API call when
    // the component gets rendered on the server can give you unexpected results.  
    componentDidMount() {
        fetch('https://api.github.com/users/gaearon/gists')
            .then(response => response.json)
            .then(gists => this.setState({ gists }));
    }

    static propTypes = {
        prop: array.isRequired
    }

    render() {
        return (
            <ul>
                {this.state.gists.map(gist => (
                    <li key={gist.id}>{gist.description}</li>
                ))}
            </ul>
        );
    }
}
