import React from 'react';
import StopWatch from './stopwatch/StopWatch';

const DumbellExercise = () => {
    return (
        <div className='workout-program-grid'>
            <h1 className='margin-left-workout-program'>Dumbbell Exercise List: </h1>  
            <ul className='margin-left-workout-program'>
                <li>Arm Circles</li>
                <li>Shoulder Stretch </li>
                <li>Front-raises</li>
                <li>Side-raises</li>
                <li>Bent Over Row</li>
                <li>Dumbbell Plie Squats</li>
                <li>Dumbell Lunges</li>
                <li>Hammer Curls</li>
                <li>Dumbell Hip Hinge</li>
                <li>Shoulder Stretch</li>
            </ul>
            <p style={{"font-weight":"400", "font-size": "1.3rem", "marginLeft": "19rem"}}>*Minimum of 12 reps with 2 sets for each movement</p>
            <StopWatch />
            <iframe style={{"borderRadius": "12px", "marginTop": "2.2rem"}} src="https://open.spotify.com/embed/playlist/0sWyckJ8KrH2HbdiRGliyl?utm_source=generator" width="1044px" height="85" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title='chest-album'></iframe>
        </div>
    )
}

export default DumbellExercise;