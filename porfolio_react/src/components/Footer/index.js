import React from 'react';

function Footer(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark text-light justify-content-md-center mt-4 footer">
            <a className="nav-link text-light" href="#">{props.nameFirst} {props.nameLast}</a>
        </nav>
    )
}

export default Footer;