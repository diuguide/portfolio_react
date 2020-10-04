import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav ml-auto justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="./portfolio.html">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;