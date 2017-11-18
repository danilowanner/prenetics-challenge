import React, { Component } from 'react';
import './Header.css';

import logoMydna from '../assets/images/logo.png';
import logoPru from '../assets/images/logo-pru.png';

class Header extends Component {
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
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
