import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => { //using arrow function representation
    
     return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}> {title}</i>
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "GitHub Finder",
    icon: "fab fa-github"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
