import React, { Component } from 'react';
import openImg from '../Images/screenshots/scrn_weathermap.png';

class WeatherMap extends Component {
    render() {
        return(
            <div id="main" className="row">
                <div className="col">
                    <div className="card shadow">
                        <h5 className="card-header">Daily Weather Map</h5>
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
export default WeatherMap;