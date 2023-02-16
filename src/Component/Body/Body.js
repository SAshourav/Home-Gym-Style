import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Body.css';

const Body = () => {
    const [exercises, setExercises] = useState([])
    useEffect(()=>{
        fetch('option.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    },[])
    return (
        <div className='container-body'>
            <div className='exercise-section'>
                {
                    exercises.map(exercise => <Exercise
                    key = {exercise.id}
                    exercise = {exercise}
                    ></Exercise>)
                }
            </div>
            <div className='details-section'>

            </div>
            
        </div>
    );
};

export default Body;