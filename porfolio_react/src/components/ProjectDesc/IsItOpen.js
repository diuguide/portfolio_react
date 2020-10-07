import React, { Component } from 'react';
import openImg from '../Images/screenshots/screenshot_isitopen.png';

class IsItOpen extends Component {
    render() {
        return (
            <div id="main" className="row">
                <div className="col">
                    <div className="card shadow">
                        <h5 className="card-header">Is it open? An API search engine</h5>
                        <div className="card-body">
                            <div className="row imageCont">
                                <div className="col">
                                    <img className="picture" alt="isitopen" src={openImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default IsItOpen;