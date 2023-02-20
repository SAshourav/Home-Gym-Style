import React from 'react';
import './Details.css'
const Details = ({DetailsEx}) => {
    return (
        <div className='main-div'>
            <div className='user-info'>
                <h2>Zahid Hosain</h2>
                <p>New york</p>
            </div>
            <div className='health'>
                    
            </div>
            <h2>Exercise You Selected</h2>
            <h3>Name : {DetailsEx.name}</h3>
        </div>
    );
};

export default Details;