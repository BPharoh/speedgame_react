import React from 'react';
import './Circle.css';

const Circle = (props) => {
return (
    <div 
    onClick={props.gameOnStatus ? props.click : null}
    style={{pointerEvents: props.gameOnStatus ? "all" : 'none'}}
    className={`circle ${props.active ? 'active' : ""}`} >
    <p>{props.id}</p>
    </div>
);
};

export default Circle;