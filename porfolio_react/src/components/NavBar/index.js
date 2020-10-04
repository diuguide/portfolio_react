import React from 'react';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav navbar-nav ml-auto justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="./portfolio.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;