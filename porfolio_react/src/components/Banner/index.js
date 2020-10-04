import React from 'react';

function Banner(props) {
    return (
        <div className="col-sm-10 col-md-6 col-lg-6 mt-1 bg-light rounded p-2 shadow">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h2 className="name">{props.nameFirst} {props.nameLast}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>{props.position}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;