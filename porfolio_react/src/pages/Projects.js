import React, { Component } from 'react'
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
            <>
            <div className="row">
              <div className="col col-md-4 col-lg-5" style={{ display: "contents" }}> 
                <ProjectCard />
            </div>  
            </div>
            </>
        )
    }
}

export default Projects