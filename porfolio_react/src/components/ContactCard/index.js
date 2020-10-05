import React from'react';
import { Link } from 'react-router-dom';
import gitHubImg from './githubsmall.png';
import linkedInImg from './linkedin.png';

function ContactCard(props) {
    console.log(props);
    return (
        <div  className="row">
                <div className="col m-1 bg-light rounded">
                    <div className="row">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5>Email: {props.email} </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Phone: {props.phone} </h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        
                                       
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Thank you for taking a look at my web development portfolio, I look forward
                                            to
                                            working
                                            with you in the future! Please feel free to take a look at my linkedIn
                                            profile as
                                            well
                                            as my github repositories. Have a great day!</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img src={gitHubImg} alt="GitHub" />
                                        <img src={linkedInImg} alt="linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactCard;     