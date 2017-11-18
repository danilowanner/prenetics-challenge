import React, { Component } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroSection />
      </div>
    );
  }
}

export default App;
