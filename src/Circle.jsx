import React from 'react';
import './Circle.css';

const Circle = (props) => {
 const circle = [1,2,3,4,5];
    return (
        <div className='circleContainer' onClick={props.clicks}>
            {circle.map((item) => { 
            return <span className='circle' key={item}>{item}</span>;
            })}
        </div>
    );
};

export default Circle;