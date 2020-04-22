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
      timerRunning: false,
      display: '25:00',
      workTimerOn: true,
      workDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      workCycle: 1
    }
  }

  addLeadingZero = num => num < 10 ? '0' + num : num;

  checkCurrDuration = () => {
    const { workTimerOn, workDuration, shortBreakDuration, longBreakDuration, workCycle } = this.state;

    if (!workTimerOn && workCycle < 4) return shortBreakDuration;
    if (!workTimerOn && workCycle === 4) return longBreakDuration;

    return workDuration;
  }

  // alarm sound function

  // get quote function

  startTimer = duration => {
    let timer = duration;

    this.setState({ timerRunning: true });

    const countdown = setInterval(() => {
      let { playButtonOn, timerRunning, workTimerOn, workCycle } = this.state;
      let minutes = this.addLeadingZero(parseInt(timer / 60));
      let seconds = this.addLeadingZero(parseInt(timer % 60));

      if (timerRunning) this.setState({ display: minutes + ':' + seconds });
      else clearInterval(countdown);

      if (timer-- < 0) timer = duration;

      // if (minutes === '00' && seconds = '00') play alarm sound & change quote if it's the end of a work session
      
      // timer decrements to -1 with lead zero. clear here rather than at 0, so we can stay at 0 for a second.
      if (seconds === '0-1') {
        clearInterval(countdown);
        this.setState({ 
          playButtonOn: !playButtonOn,
          workCycle: workCycle === 4 ? 1 : workCycle++,
          workTimerOn: !workTimerOn
        });
        this.setState({ display: this.addLeadingZero(this.checkCurrDuration()) + ':00' });
      }
    }, 1000);
  }

  resetTimer = duration => {
    this.setState({
      timerRunning: false,
      display: this.addLeadingZero(duration/60) + ':00'
    });
  }

  playOrStop = e => {
    const { playButtonOn } = this.state;
    let duration = this.checkCurrDuration() * 60;

    if (playButtonOn) this.startTimer(duration);
    else this.resetTimer(duration);

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