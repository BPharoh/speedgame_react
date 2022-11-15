import React from 'react';

const GameOver = (props) => {
    return (
        <div className='overlay'>
            <div className='gameContainer'>
               <h2>Game Over</h2> 
               <p>Your score is: {props.score}</p>
               <button onClick={props.close}>X</button>
            </div>
        </div>
    );
};

export default GameOver;