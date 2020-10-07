import React from 'react';

import IsItOpen from '../ProjectDesc/IsItOpen.js'
import PasswordGenerator from '../ProjectDesc/PasswordGenerator.js';
import WeatherMap from '../ProjectDesc/WeatherMap.js';


function ProjectCard(props) {

    return (
        <>
            <IsItOpen />
            <WeatherMap />
            <PasswordGenerator />
            
        </>
    )
}

export default ProjectCard