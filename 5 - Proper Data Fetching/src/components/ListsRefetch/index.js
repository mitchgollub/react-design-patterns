import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-refetch';

const List = ({ gists }) => (
    gists.fulfilled && (
        <ul>
            {gists.map(gist => (
                <li key={gist.id}>{gist.description}</li>
            ))}
        </ul>
    )
);
List.propTypes = {
    data: object
};

const connectWithGists = connect(({username}) => ({
    gists: `https://api.github.com/users/${username}/gists`
}));

export default ListWithGistsConnect = connectWithGists(Lists); 