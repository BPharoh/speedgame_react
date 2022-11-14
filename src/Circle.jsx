import React from 'react';
import './Circle.css';

const Circle = (props) => {
    const circle = [1,2,3,4,5];

    const circleMap = circle.map((item) => item)
    return (
        <div className='circleContainer' onClick={props.clicks}>
            <span className='circle' id='1'>{circleMap}</span>
        </div>
    );
};

export default Circle;