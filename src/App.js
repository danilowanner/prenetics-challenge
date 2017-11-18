import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import HeroSection from './components/HeroSection';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <HeroSection />
      </div>
    );
  }
}

export default App;
