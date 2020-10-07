import React, { Component } from 'react';
import openImg from '../Images/screenshots/screenshot_myriad.png';

class Myriad extends Component {
    render() {
        return (

            <div className="col m-4" >
                <div className="card shadow" style={{ width: "375px", height: "100%" }}>
                    <h5 className="card-header">Myriad</h5>
                    <div className="card-body">
                    <div className="row coverDiv">
                            <div className="col">



                            </div>
                        </div>
                        <div className="row imageCont">
                            <div className="col">
                                <img className="imgHov" alt="myriad" src={openImg} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=b7b7a4" alt="HTML" />
                                <img src="https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&logoColor=white&color=b7b7a4" alt="css" />
                                <img src="https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=b7b7a4" alt="javascript" />
                                <img src="https://img.shields.io/badge/jQuery-informational?style=flat&logo=jquery&logoColor=white&color=b7b7a4" alt="jQuery" />
                                <img src="https://img.shields.io/badge/NodeJS-informational?style=flat&logo=node-dot-js&logoColor=white&color=b7b7a4" alt="nodeJS" />
                                <img src="https://img.shields.io/badge/Express-informational?style=flat&logo=expressjs&logoColor=white&color=b7b7a4" alt="express" />
                                <img src="https://img.shields.io/badge/Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=b7b7a4" alt="bootstrap" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/diuguide/symptom_tracker">
                                    <img id="github" src="https://img.shields.io/badge/REPO-Github-informational?style=flat&logo=github&logoColor=white" alt="github" />
                                </a>
                                <a rel="noopener noreferrer" target="_blank" href="https://symptomtracker2.herokuapp.com/">
                                    <img id="deployment" src="https://img.shields.io/badge/DEPLOYMENT-informational?style=flat" alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Myriad;