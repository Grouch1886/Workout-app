import React from 'react';
import StopWatch from './stopwatch/StopWatch';

const LegsExercise = () => {
    return (
        <div className='workout-program-grid'>
            <h1 className='margin-left-workout-program'>Legs Exercise List: </h1>  
            <ul className='margin-left-workout-program'>
                <li>Jumping Jacks</li>
                <li>Squats </li>
                <li>Cursty Lunges</li>
                <li>Side Leg raises</li>
                <li>Side Leg Circles</li>
                <li>Glute Kick Back</li>
                <li>Jumping Squats</li>
                <li>Hammer Curls</li>
                <li>Wall Sit</li>
                <li>Calf Stretch</li>
            </ul>
            <p style={{"font-weight":"400", "font-size": "1.3rem", "marginLeft": "19rem"}}>*Minimum of 12 reps with 2 sets for each movement</p>
            <StopWatch />
            <iframe style={{"borderRadius": "12px", "marginTop": "2.2rem"}} src="https://open.spotify.com/embed/playlist/0sWyckJ8KrH2HbdiRGliyl?utm_source=generator" width="1044px" height="85" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title='chest-album'></iframe>
        </div>
           
        
       
    )
}

export default LegsExercise;