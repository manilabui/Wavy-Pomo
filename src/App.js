import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    constructor() {
    super()
    this.state = {
      quote: 'My greatest award is what I’m about to do.'
    }
  }

  render() {
    return (
      <div>
        <h1 className='f2 fw1 i f1-ns tracked tc'>Wavy Pomo</h1>
        <Header quote={this.state.quote}/>
        <Timer />
        <Footer />
      </div>
    );
  }
}

export default App;