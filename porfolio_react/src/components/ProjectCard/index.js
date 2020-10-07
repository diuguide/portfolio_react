import React, { useState } from 'react';
import openImg from '../Images/screenshots/screenshot_isitopen.png';


function ProjectCard(props) {
    
    let [displayEl, setDisplay] = useState('none')
    const mouseOver = () => {
        console.log(displayEl)    
        setDisplay(displayEl = "block");
        console.log(displayEl)
    };
    return (
        <div id="main" className="row">
            <div className="col">
                <div className="card shadow">
                    <h5 className="card-header">Is it open? An API-based search engine</h5>
                    <div className="card-body">
                        <div className="row imageCont">
                            <div className="col">
                                <div className="test" style={{ display: {displayEl}}} >Hello</div>
                               <img onMouseOver={mouseOver} className="picture" alt="isitopen" src={openImg} /> 
                            </div>
                            {/* <div className="col col-md-4 col-lg-3 float-right imageCont">
                                {/* <div className="description"><h1>Hello!</h1></div> */}
                            
                        </div>
                            {/* <div className="col col-md-8 col-lg-9">
                                <div className="row">
                                    <div className="col">
                                        <p className="card-text">This app utilizes jQuery, API's, css, and
                                        dynamic HTML
                                        which presents
                                        local covid19 data along side business data based on user input.
                                    </p>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3">
                                    <div className="col">
                                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/diuguide">
                                    <img id="github" src="https://img.shields.io/badge/R-Github-informational?style=flat&logo=github&logoColor=white" alt="github" />
                                </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a href="https://www.w3schools.com/html/" target="_blank">
                                            <img src="https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=2bbc8a" alt="HTML" />
                                            <img src="https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&logoColor=white&color=2bbc8a" alt="css" />
                                            <img src="https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a" alt="javascript" />
                                            <img src="https://img.shields.io/badge/jQuery-informational?style=flat&logo=jquery&logoColor=white&color=2bbc8a" alt="jQuery" />
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard