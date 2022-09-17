import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Home';
import About from './About';
import AbsExercise from './AbsExercise';
import ChestExercise from './ChestExercise';
import DumbellExercise from './DumbellExercise';
import FullbodyExercise from './FullbodyExercise';
import LegsExercise from './LegsExercise';

import Header from './Header';



const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div> 
                    <Header />
                    <Routes>
                        <Route path="/Workout-app" exact element={<Home/>}/>
                        <Route path="/about" exact element={<About/>}/>
                        <Route path="/abs" exact element={<AbsExercise/>}/>
                        <Route path="/chest" exact element={<ChestExercise/>}/>
                        <Route path="/dumbell" exact element={<DumbellExercise/>}/>
                        <Route path="/fullbody" exact element={<FullbodyExercise/>}/>
                        <Route path="/legs" exact element={<LegsExercise/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
          
        </div>
    )
}

export default App
