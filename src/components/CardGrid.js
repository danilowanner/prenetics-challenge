import React, { Component } from 'react';
import './CardGrid.css';

class CardGrid extends Component {
  render() {
    return (
      <div className="card-grid">
        { this.props.children }
      </div>
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.lead }</p>
        { this.props.children }
      </div>
    );
  }
}

export { Card, CardGrid }; //, };
