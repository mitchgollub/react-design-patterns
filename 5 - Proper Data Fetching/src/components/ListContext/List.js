import React from 'react'
import array from 'prop-types'

import { ListProvider, ListContext } from './ListContext';

const List = () => (
    <ListProvider>
        <ListContext.Consumer>
            {/* These props are coming from the Provider's value */}
            {({ gists }) => (
                <ul>
                    {gists.map(gist => (
                        <li key={gist.id}>{gist.description}</li>
                    ))}
                </ul>
            )}
        </ListContext.Consumer>
    </ListProvider>
);

List.propTypes = {
    data: array
};

export default List

