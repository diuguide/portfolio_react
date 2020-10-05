import React, { Component } from 'react'
import Banner from '../components/Banner/index';
import About from '../components/About/index';
import Links from '../components/Links/index';
import Skills from '../components/Skills/index';

export class Home extends Component {
    state = {
        nameFirst: "Everett",
        nameLast: "Diuguid",
        phone: "(919) 801-8756",
        email: "everett.diuguid@gmail.com",
        position: "Full Stack Developer",
        linkedIn: "https://www.linkedin.com/in/everett-diuguid-583632197/",
        gitHub: "https://github.com/diuguide"
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-md-4 col-lg-9">
                        <Banner
                            nameFirst={this.state.nameFirst}
                            nameLast={this.state.nameLast}
                            position={this.state.position}
                        />
                        <About />
                    </div>
                    <div className="col col-md-3 col-lg-3">
                        <div className="row">
                            <Links />
                        </div>
                        <div className="row">
                            <Skills />
                        </div>

                    </div>
                </div>



            </div>
        )
    }
}

export default Home
