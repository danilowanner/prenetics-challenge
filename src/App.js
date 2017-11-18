import React from 'react';
import Reflux, { Component } from 'reflux';
import NavStore from './stores/NavStore';
import MenuBar from './components/MenuBar';
import HeroSection from './components/HeroSection';
import DashboardSection from './components/DashboardSection';
import LoginModal from './components/LoginModal';
import 'normalize.css';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.store = NavStore;
  }

  render() {
    return (
      <div className="App">
        <MenuBar />
        {
          this.renderView(this.state.view)
        }
        {
          this.state.modals.map(this.renderModal)
        }
      </div>
    );
  }

  renderView(name) {
    switch(name) {
      case "HOME":
        return (
          <HeroSection />
        )
        break;
      case "DASHBOARD":
        return (
          <DashboardSection />
        )
      default:
        console.log(`View ${name} not found`);
    }
  }

  renderModal(name) {
    switch(name) {
      case "LOGIN":
        return(<LoginModal key={name} />)
      default:
        console.log(`Modal ${name} not found`);
    }
  }
}

export default App;
