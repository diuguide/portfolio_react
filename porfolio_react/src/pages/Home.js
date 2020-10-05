import React, { Component } from 'react'
import Banner from '../components/Banner/index';
import About from '../components/About/index';

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
            <div className="container bg-light">
                <Banner
                    nameFirst={this.state.nameFirst}
                    nameLast={this.state.nameLast}
                    position={this.state.position}
                />
                <About />
            </div>
        )
    }
}

export default Home
