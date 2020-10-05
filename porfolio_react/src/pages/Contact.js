import React, { Component } from 'react'
import Banner from '../components/Banner/index';
import ContactCard from '../components/ContactCard/index';

export class Contact extends Component {
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
                <Banner
                    nameFirst={this.state.nameFirst}
                    nameLast={this.state.nameLast}
                    position={this.state.position}
                />
                <ContactCard 
                        nameFirst={this.state.nameFirst}
                        nameLast={this.state.nameLast}
                        position={this.state.position}
                                    
                />
            </div>
        )
    }
}

export default Contact
