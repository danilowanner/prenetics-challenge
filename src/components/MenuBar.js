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
          <a className="logos" onClick={Actions.navToHome}>
            <img className="logo logo-mydnapro" src={logoMydna} alt="myDNA Pro Logo" />
            <img className="logo logo-prudential" src={logoPru} alt="Prudential Logo" />
          </a>
          <nav id="main-nav">
            <a onClick={Actions.navToHome}>About</a>
            <a onClick={Actions.navToHome}>How It Works</a>
            <a onClick={Actions.navToHome}>Get Kit</a>
            <a onClick={Actions.navToHome}>Register</a>
            {
              this.state.loggedIn ?
                [
                  <a className="highlight" onClick={Actions.navToDashboard}>Dashboard</a>,
                  this.renderLogoutButton()
                ]
                : this.renderLoginButton()
            }
          </nav>
        </div>
      </header>
    );
  }

  renderLoginButton() {
    return (
      <button className="button login-button" onClick={Actions.openLoginModal}>
        Login
      </button>
    )
  }

  renderLogoutButton() {
    return (
      <button className="button logout-button" onClick={Actions.logout}>
        Logout
      </button>
    )
  }
}

export default MenuBar;
