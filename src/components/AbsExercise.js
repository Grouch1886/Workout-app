import React from 'react';
import { Link } from 'react-router-dom';
import StopWatch from './stopwatch/StopWatch';

const AbsExercise = () => {
    return (
        <div className='workout-program-grid'>
            <h1 className='margin-left-workout-program'>Abs Exercise List: </h1>
            <ul className='margin-left-workout-program'>
                <li>Hollow Body Crunch</li>
                <li>Russian Twist </li>
                <li>Push-up Rotation</li>
                <li>Side Bridge Plank</li>
                <li>Butt Bridge</li>
                <li>Mountain Climber</li>
                <li>V Up</li>
                <li>Cobra Stretch</li>
                <li>Spine Lumbar Twist Stretch Left</li>
                <li>Spine Lumber Twist Stretch Right</li>
            </ul>
            <p style={{"font-weight":"400", "font-size": "1.3rem", "marginLeft": "19rem"}}>*Minimum of 12 reps with 2 sets for each movement</p>
            <StopWatch />
            <iframe style={{"borderRadius": "12px", "marginTop": "2.2rem"}} src="https://open.spotify.com/embed/playlist/0sWyckJ8KrH2HbdiRGliyl?utm_source=generator" width="1044px" height="85" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title='chest-album'></iframe>
        </div>
    )
}

export default AbsExercise;