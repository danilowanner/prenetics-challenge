import React, { Component } from 'react';
import { CardGrid, Card } from './CardGrid';
import './DashboardSection.css';

class DashboardSection extends Component {
  render() {
    return (
      <section className="dashboard-section">
        <div className="dashboard-img-fade"></div>
        <div className="content-wrapper">
          <h1>Your personal Dashboard</h1>
          <CardGrid>
            <Card
              title="Your Genetic Results"
              lead="See your genetic results below to find out how your genes affect your diet and exercise."
              />
            <Card
              title="Genetic Health Report"
              lead="Download your genetic health report as a PDF.">
              <a className="btn btn-lg btn-main" href="#">Download PDF</a>
            </Card>
          </CardGrid>
        </div>
      </section>
    );
  }
}

export default DashboardSection;
