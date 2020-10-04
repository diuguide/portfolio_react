import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import Banner from '../components/Banner/index';
import ContactCard from '../components/ContactCard/index';
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
            <div>
                <NavBar />
                <Banner />
                <ContactCard
                    nameFirst={this.state.nameFirst}
                    nameLast={this.state.nameLast}
                    phone={this.state.phone}
                    email={this.state.email}
                    linkedIn={this.state.linkedIn}
                    gitHub={this.state.gitHub}
                    />
                <Footer />
            </div>
        )
    }
}

export default Home
