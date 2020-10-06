import React, { Component } from 'react'
import ProjectBanner from '../components/ProjectBanner/index';
import ProjectCard from '../components/ProjectCard';
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
    handleMouseOver = () => {
        console.log("mouse over");
    }

    render() {
        return (
            <div>
                <ProjectBanner />
                <ProjectCard 
                mouseOver={this.handleMouseOver}
                />
                
            </div>
        )
    }
}

export default Projects