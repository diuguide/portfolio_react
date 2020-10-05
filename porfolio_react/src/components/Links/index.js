import React from 'react';

function Links() {
    return (
        <div className="col-sm col-md-4 col-lg-3 bg-light rounded m-1 p-2 d-block shadow">
            <div className="row">
                <div className="col">
                    <p>Please check out some of my latest projects or navigate to the contact page and leave me
                    a message!</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a role="button" className="btn btn-info w-100 mb-3" href="/Projects">Projects</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a role="button" className="btn btn-info w-100" href="/Contact">Contact Me!</a>
                </div>
            </div>
        </div>
    )
}

export default Links;