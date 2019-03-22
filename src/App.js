import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Control from './components/Control';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'My greatest award is what I’m about to do.',
      playButtonOn: true,
      currTimer: 'work',
      timerRunning: false,
      display: '25:00',
      workDuration: 0.1,
      shortBreakDuration: 5,
      longBreakDuration: 15
    }
  }

  startTimer = duration => {
    this.setState({ timerRunning: true });

    let timer = duration;

    setInterval(() => {
      let minutes = parseInt(timer / 60);
      let seconds = parseInt(timer % 60);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      if (this.state.timerRunning) this.setState({ display: minutes + ':' + seconds });

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  // resetTimer = duration => {
  // }

  playOrStop = (e) => {
    const { playButtonOn, currTimer, workDuration, shortBreakDuration, longBreakDuration } = this.state;
    
    let duration = workDuration * 60;
    if (currTimer === 'short') duration = shortBreakDuration * 60;
    if (currTimer === 'long') duration = longBreakDuration * 60;

    if (playButtonOn) {
      this.startTimer(duration);
    }
    // else resetTimer(duration);
    this.setState({ playButtonOn: !playButtonOn });
  }

  render() {
    const { quote, display, playButtonOn } = this.state;

    return (
      <div className='tc'>
        <h1 className='f2 fw1 i f1-ns tracked tc'>Wavy Pomo</h1>
        <Header quote={quote} />
        <Timer display={display} />
        <Control playButtonOn={playButtonOn} playOrStop={this.playOrStop} />
        <Footer />
      </div>
    );
  }
}

export default App;