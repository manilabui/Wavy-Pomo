import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Control from './components/Control';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: 'My greatest award is what I’m about to do.',
      playButton: true
    }
  }

  playOrStop = (e) => {
    this.setState({ playButton: !this.state.playButton});
  }

  render() {
    return (
      <div className='tc'>
        <h1 className='f2 fw1 i f1-ns tracked tc'>Wavy Pomo</h1>
        <Header quote={this.state.quote} />
        <Timer />
        <Control playButton={this.state.playButton} playOrStop={this.playOrStop} />
        <Footer />
      </div>
    );
  }
}

export default App;