import React from 'react';
import Links from '../Links/index';

function About(props) {
    return (
        <div className="row justify-content-center">
            <div class="col-sm col-md-6 m-1 mt-1 bg-light rounded p-2 shadow">
                I am a Web developer with a background in hospitality and communication. I have a proven ability to focus on the
                customer experience while enhancing a brand message. I excel in fast paced, team oriented
                environments that require hard work, attention to detail, and the ability to adapt. My objective
                is to join an entrepreneurial web development team with a focus on mobile-first design and
                building a better web-experience.
            </div>
            <Links />
        </div>
    )
}
export default About;