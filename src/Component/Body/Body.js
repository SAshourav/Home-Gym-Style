import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';
import './Body.css';

const Body = () => {
    const [exercises, setExercises] = useState([])
    const [DetailsEx, setDetailsEx] = useState([])
    useEffect(()=>{
        fetch('option.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    },[])
    const addListHandler = (exercise) =>{
        setDetailsEx(exercise);
    }
    return (
        <div className='container-body'>
            <div className='exercise-section'>
                {
                    exercises.map(exercise => <Exercise
                    key = {exercise.id}
                    exercise = {exercise}
                    addListHandler = {addListHandler}
                    ></Exercise>)
                }
            </div>
            <div className='details-section'>
                <h2> Hey : {DetailsEx.id}</h2>
                <Details
                    DetailsEx={DetailsEx}
                >
                </Details>
            </div>
            
        </div>
    );
};

export default Body;