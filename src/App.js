import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';


class App extends Component {
  state = {
    score: 0,
    circles: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
    ]
  }

  // showCircleHandler = (id) => {
  //   this.state.circles.map((id)=> {
  //     return id});
  //   console.log(id);
  // }

  clickHandler = () => {
    this.setState({score: this.state.score +1});
  }

  
  render() {


    return (
      <div className='gameContainer'>
        <h1> Speed Game  React </h1>
        <p className="result" > Score: <span>{this.state.score} </span></p>
        <Circle 
          clicks={this.clickHandler}
        />
        <button >Start Game</button>
        <button>End Game</button>
      </div>
    );
  }
}

export default App;



