import React from 'react';
import './Exercise.css'

const Exercise = ({addListHandler,exercise}) => {
    return (
        <div className='container'>
            <img src={exercise.img} alt="" />
            <div className='info'>
                <h2>{exercise.name}</h2>
                <p>{exercise.description}</p>
                <p>{exercise.age}</p>
                <p>{exercise.time} min</p>
            </div>
            <button onClick={()=>{
                addListHandler(exercise)}} className='btn'>
                <p className='btn-text'>Add To List</p>
            </button>
        </div>
        
    );
};

export default Exercise;