import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import Banner from '../components/Banner/index';
import ContactCard from '../components/ContactCard/index';
export class Home extends Component {
    static propTypes = {
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
                <ContactCard />
                <Footer />
            </div>
        )
    }
}

export default Home
