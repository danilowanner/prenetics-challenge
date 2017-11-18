import React from 'react';
import Reflux, { Component } from 'reflux';
import Actions from '../stores/Actions';
import AuthStore from '../stores/AuthStore';
import './MenuBar.css';

import logoMydna from '../assets/images/logo.png';
import logoPru from '../assets/images/logo-pru.png';

class MenuBar extends Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.store = AuthStore;
  }

  render() {
    return (
      <header className="menu-bar">
        <div className="content-wrapper">
          <div className="logos">
            <img className="logo logo-mydnapro" src={logoMydna} alt="myDNA Pro Logo" />
            <img className="logo logo-prudential" src={logoPru} alt="Prudential Logo" />
          </div>
          <nav id="main-nav">
            <a href="/about/">About</a>
            <a href="/how-it-works/">How It Works</a>
            <a href="/kit/">Get Kit</a>
            <a href="/register/">Register</a>
            {
              !this.state.loggedIn ?
                this.renderLoginButton() : this.renderLogoutButton()
            }
          </nav>
        </div>
      </header>
    );
  }

  renderLoginButton() {
    return (
      <button className="login-button" onClick={Actions.login}>
        Login
      </button>
    )
  }

  renderLogoutButton() {
    return (
      <button className="logout-button" onClick={Actions.logout}>
        Logout
      </button>
    )
  }
}

export default MenuBar;
