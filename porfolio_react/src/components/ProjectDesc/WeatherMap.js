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
                            <div className="row">
                                <div className="col">
                                    <img src="https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=b7b7a4" alt="HTML" />
                                    <img src="https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&logoColor=white&color=b7b7a4" alt="css" />
                                    <img src="https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=b7b7a4" alt="javascript" />
                                    <img src="https://img.shields.io/badge/jQuery-informational?style=flat&logo=jquery&logoColor=white&color=b7b7a4" alt="jQuery" />
                                    <img src="https://img.shields.io/badge/Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=b7b7a4" alt="bootstrap" />
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