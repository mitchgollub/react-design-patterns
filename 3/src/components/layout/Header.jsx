import React from 'react';
import { string } from 'prop-types';

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

export default Header;