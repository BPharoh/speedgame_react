import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import GameOver from './GameOver';

// let clicksound = new Audio(click);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max -min + 1)) + min;
};


class App extends Component {
  state = {
    circles: [ 1, 2, 3, 4 ],
    score: 0,
    current: undefined,
    pace: 1000,
    gameOver: false,
    gameOn: false,
    rounds: 0,
  };



timer;

// clickPlay = () => {
//   if (clickSound.paused) {
//     clickSound.play();
//   } else {
//     clickSound.currentTime = 0;
//   }
// };

  clickHandler = (i) => {
    // clicksound.play();
    if (this.state.current !== i){
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nextCirce = () => {
    if (this.state.rounds >= 3){
      this.stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRndInteger(0, this.state.circles.length -1);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });
    console.log(this.state.current);
    this.timer = setTimeout(this.nextCirce, this.state.pace);
  };

  

  startHandler = () => {
    this.nextCirce();
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOver: !this.state.gameOver,
    });
    // window.location.reload();
  };

  closeHandler = () => {
    window.location.reload();
  }
  render() {

    return (
         <div>
          <h1>Speed Game</h1>
          <p>Your Score: {this.state.score}</p>
          <div className='circles'>
            {this.state.circles.map((_, i) => ( 
              <Circle 
              key={i} 
              id={i + 1} 
              //gameStatus={this.state.gameOn}
              click={() => this.clickHandler(i)}
              active={this.state.current === i}
              />
            ))}
          </div>
          {this.state.gameOver && <GameOver  close={this.closeHandler} score={this.state.score}/>}
          <button onClick={this.startHandler}>Start</button>
          <button onClick={this.stopHandler}>End</button>
         </div>
      // <div className='gameContainer'>
      //   <h1> Speed Game  React </h1>
      //   <p className="result" > Score: <span>{this.state.score} </span></p>
      //   <Circle 
      //     clicks={this.clickHandler}
      //   />
      //   <button >Start Game</button>
      //   <button>End Game</button>
      // </div>
    );
  }
}

export default App;



