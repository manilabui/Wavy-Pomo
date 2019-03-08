import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='f2 fw1 i f1-ns tracked tc'>Wavy Pomo</h1>
        <Header />
        <Timer />
        <Footer />
      </div>
    );
  }
}

export default App;