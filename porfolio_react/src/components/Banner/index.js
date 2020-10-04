import React from 'react';
import { Link } from 'react-router-dom';

function Banner(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-6 col-lg-6 mt-1 bg-light rounded p-2 shadow">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Link to='/'><h3>{props.nameFirst} {props.nameLast}</h3></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>{props.position}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner;