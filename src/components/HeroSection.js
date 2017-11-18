import React, { Component } from 'react';
import './HeroSection.css';

class HeroSection extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="hero-img-fade"></div>
        <div className="content-wrapper">
          <div className="developed-by hero-developed-by">
            <p className="lead">developed by</p>
            <p className="prenetics">Prenetics<sup>&trade;</sup></p>
          </div>
          <div className="hero-cta" id="start-journey">
            <h1>Start Your DNA-Based Journey to Health</h1>
            <div className="hero-cta-buttons">
              <a className="btn btn-lg btn-main" href="/kit/">Get Kit</a>
              <a className="btn btn-lg btn-main btn-white" href="/register/">Register</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
