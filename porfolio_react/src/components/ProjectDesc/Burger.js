import React, { Component } from 'react';
import openImg from '../Images/screenshots/screenshot_burger.png';

class Burger extends Component {
    render() {
        return (

            <div className="col project">
                <div className="card shadow" style={{ width: "375px", height: "100%" }}>
                    <h5 className="card-header">Eat-Da-Burger</h5>
                    <div className="card-body">
                        <div className="row coverDiv">
                            <div className="col description">
                                <h5>A fullstack application storing burger data in a database, ready to be consumed!</h5>
                            </div>
                        </div>
                        <div className="row imageCont">
                            <div className="col">
                                <img className="imgHov" alt="burgerapp" src={openImg} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="logo" src="https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=b7b7a4" alt="HTML" />
                                <img className="logo" src="https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&logoColor=white&color=b7b7a4" alt="css" />
                                <img className="logo" src="https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=b7b7a4" alt="javascript" />
                                <img className="logo" src="https://img.shields.io/badge/jQuery-informational?style=flat&logo=jquery&logoColor=white&color=b7b7a4" alt="jQuery" />
                                <img className="logo" src="https://img.shields.io/badge/NodeJS-informational?style=flat&logo=node-dot-js&logoColor=white&color=b7b7a4" alt="nodeJS" />
                                <img className="logo" src="https://img.shields.io/badge/Express-informational?style=flat&logo=expressjs&logoColor=white&color=b7b7a4" alt="express" />
                                <img className="logo" src="https://img.shields.io/badge/Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=b7b7a4" alt="bootstrap" />

                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/diuguide/burger">
                                    <img id="github" src="https://img.shields.io/badge/REPO-Github-informational?style=flat&logo=github&logoColor=white" alt="github" />
                                </a>
                                <a rel="noopener noreferrer" target="_blank" href="https://aqueous-cove-58745.herokuapp.com/">
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
export default Burger;