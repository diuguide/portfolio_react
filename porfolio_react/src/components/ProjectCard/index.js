import React from 'react';
import CodeQuiz from '../ProjectDesc/CodeQuiz.js';
import IsItOpen from '../ProjectDesc/IsItOpen.js'
import PasswordGenerator from '../ProjectDesc/PasswordGenerator.js';
import WeatherMap from '../ProjectDesc/WeatherMap.js';
import Myriad from '../ProjectDesc/Myriad.js';
import Burger from '../ProjectDesc/Burger.js';


function ProjectCard() {

    return (
        <>
            <IsItOpen />
            <Myriad />
            <WeatherMap />
            <CodeQuiz />
            <PasswordGenerator />
            <Burger />
        </>
    )
}

export default ProjectCard