import React from 'react';
import './GameOver.css';

const GameOver = (props) => {
    return (
        <div className='overlay'>
            <div className='overlayContent'>
               <h2>Game Over</h2> 
               <p>Your score is: {props.score}</p>
               <p>Your achievement is: {props.message}</p>
               <button onClick={props.close} className="close">X</button>
            </div>
        </div>
    );
};

export default GameOver;