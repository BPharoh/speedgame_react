import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import GameOver from './GameOver';
import click from './sounds/click.mp3';
import close from './sounds/close.mp3';
import birdsound from './sounds/birdsounds.mp3';


let clicksound = new Audio(click);
let closesound = new Audio(close);
let gamesound = new Audio(birdsound);

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
    rounds: 5,
    message: "",
  };



timer;


  clickHandler = (i) => {
   
    if (this.state.current !== i){
      this.setState({
        rounds: this.state.rounds - 1,
      })
      return;
    } else { 
      clicksound.play();
    this.setState({
      score: this.state.score + 1,
      rounds: this.state.rounds,
    });
  }
  };

  nextCirce = () => {
    if (this.state.rounds === 0){
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
      rounds: this.state.rounds,
    });
    this.timer = setTimeout(this.nextCirce, this.state.pace);
  };

  startHandler = () => {
    gamesound.play();
    this.nextCirce();
    this.setState({gameOn: !this.state.gameOn});
  };

  stopHandler = () => {
    closesound.play();
    gamesound.pause();
    clearTimeout(this.timer);
    this.setState({
      gameOver: !this.state.gameOver,
    });
    if (this.state.score <= 2) {
      this.setState({
       message: 'Level 1',
      });
    } else if (this.state.score >= 3) {
      this.setState({
      message: 'Level 2',
     });
    }
  };

  closeHandler = () => {
    window.location.reload();
  }
  render() {

    return (
         <div className='gameContainer'>
          <h1 className='gameTitle'>Speed Game</h1>
          <p className='gameScore'>Your Score: {this.state.score}</p>
          <p className='gameScore'>Your lives: {this.state.rounds}</p>
          <div className='circleContainer'>
            {this.state.circles.map((_, i) => ( 
              <Circle 
              key={i} 
              id={i + 1} 
              gameStatus={this.state.gameOn}
              click={() => this.clickHandler(i)}
              active={this.state.current === i}
              gameOnStatus={this.state.gameOn}
              />
            ))}
          </div>
          {this.state.gameOver && <GameOver  close={this.closeHandler} score={this.state.score} message={this.state.message}/>}
          <div className='buttons'>
          <button onClick={this.startHandler}>Start</button>
          <button onClick={this.stopHandler}>End</button>
          </div>  
         </div>
    );
  }
}

export default App;



