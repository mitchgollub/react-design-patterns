import React, { Component, createContext } from 'react'
import element from 'prop-types'

export const ListContext = createContext();

export class ListProvider extends Component {
    static propTypes = {
        children: element
    };

    state = {
        gists: [],
        status: 'initial'
    };

    componentDidMount() {
        // Fetching the gists when the component is mounted
        this.fetchGists();
    }

    fetchGists = async () => {
        this.setState({
            gists: [],
            status: 'fetching'
        });

        try {
            const data = await
                fetch('https://api.github.com/users/gaearon/gists')
                    .then(resp => resp.json());

            this.setState({
                gists: data,
                status: 'done'
            });
        }
        catch (error) {
            this.setState({
                status: 'error'
            });
        }
    }

    render() {
        const { children } = this.props;

        return (
            <ListContext.Provider
                value={{
                    ...this.state
                    // Everything you pass in here will be available in the Consumer
                }}>
                {children}
            </ListContext.Provider>
        );
    }
}
