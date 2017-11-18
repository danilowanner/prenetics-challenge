import React, { Component } from 'react';
import './GeneticResults.css';

class GeneticResults extends Component {
  render() {
    return (
      <div className="genetic-results">
        {
          this.props.results ?
            this.props.results.map(this.renderResult) : 'hey'
        }
      </div>
    );
  }

  renderResult(result) {
    return (
      <div className="result" key={result.name}>
        <div className="name">{ result.name }</div>
        <div className="symbol">{ result.symbol }</div>
      </div>
    )
  }
}

export default GeneticResults;
