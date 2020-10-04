import React, { Component } from 'react'
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import Banner from '../components/Banner/index';
export class Projects extends Component {
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
            <div>
                <h1>projects</h1>
                <NavBar />
                <Banner
                    nameFirst={this.state.nameFirst}
                    nameLast={this.state.nameLast}
                    position={this.state.position}
                />
                <Footer 
                    nameFirst={this.state.nameFirst}
                    nameLast={this.state.nameLast}
                    />
            </div>
        )
    }
}

export default Projects