import React, { Component } from 'react';
import openImg from '../Images/screenshots/scrn_passwordGenerator.jpg';

class PasswordGenerator extends Component {
    render() {
        return (
            
                <div className="col">
                    <div className="card shadow" style={{ width: "375px", height: "100%" }}>
                        <h5 className="card-header">Password Generator</h5>
                        <div className="card-body">
                            <div className="row imageCont">
                                <div className="col">
                                    <img className="picture" alt="passwordgenerator" src={openImg} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=b7b7a4" alt="HTML" />
                                    <img src="https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&logoColor=white&color=b7b7a4" alt="css" />
                                    <img src="https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=b7b7a4" alt="javascript" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
export default PasswordGenerator;