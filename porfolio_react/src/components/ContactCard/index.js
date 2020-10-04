import React from'react';

function ContactCard() {
    return (
        <div  className="row">
                <div className="col-sm-10 col-md-6 col-lg-6 m-3 bg-light rounded">
                    <div className="row">
                        <div className="card shadow">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col">
                                        <h3>Everett Diuguid:<h5>Full-Stack Web Developer</h5>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5>Email: everett.diuguid@gmail.com</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Daytime Phone: (919)-801-8756</h6>
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
                                        {/* <a href="https://github.com/diuguide" target="_blank">
                                            <img className="links" src="./assets/img/githubsmall.png" alt="GitHub">
                                        </a>
                                        <a href="https://www.linkedin.com/in/everett-diuguid-583632197/"
                                            target="_blank">
                                            <img className="links" src="./assets/img/linkedin.png" alt="linkedin">
                                        </a> */}
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