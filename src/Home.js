import React from "react";
import { Link} from 'react-router-dom';


const Home = () => {
    return (
        <div className="content" style={{"margin-top": "57px",}}>

            <h1 style={{"marginBottom": "5rem", "textAlign": "center"}}>Workout Programs</h1>

            <div className="main-content-wrapper">
                <Link to={'abs'} className="main-content-wrapper_item">Abs Exercise</Link>
            </div>
    
            <div className="main-content-wrapper">
                <Link to={'chest'} className="main-content-wrapper_item">Chest Exercise</Link>
            </div>
         
            <div className="main-content-wrapper">
                <Link to={'dumbell'} className="main-content-wrapper_item">Dumbbell Exercise</Link>
            </div>
            
            <div className="main-content-wrapper">
                <Link to={'fullbody'} className="main-content-wrapper_item">Fullbody Exercise</Link>
            </div>
            
            <div className="main-content-wrapper">
                <Link to={'legs'} className="main-content-wrapper_item">Legs Exercise</Link>
            </div>  
        </div>
    )
}

export default Home;

