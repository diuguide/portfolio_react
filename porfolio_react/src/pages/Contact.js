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
            <div className="container">
                <div clasName="row">
                    <div className="col col-md-4 col-lg-6 mx-auto">
                        <Banner
                            nameFirst={this.state.nameFirst}
                            nameLast={this.state.nameLast}
                            position={this.state.position}
                        />
                        <ContactCard
                            nameFirst={this.state.nameFirst}
                            nameLast={this.state.nameLast}
                            position={this.state.position}
                            email={this.state.email}
                            phone={this.state.phone}
                            linkedIn={this.state.linkedIn}
                            gitHub={this.state.gitHub}

                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact
