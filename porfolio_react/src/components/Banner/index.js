import React from 'react';

function Banner(props) {
    return (
        <div className="row">
            <div className="col">
                <div className="row justify-content-center">
                    <div style={{ backgroundColor: "#9b9b7a" }} className="col-sm-10 col-md-6 col-lg-6 mt-1 rounded p-2 shadow">
                        <div className="col">
                            <div className="row">
                                <div style={{ color: "#f1dca7" }} className="col">
                                    <h3>{props.nameFirst} {props.nameLast}</h3>
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
            </div>
        </div>

    )
}

export default Banner;