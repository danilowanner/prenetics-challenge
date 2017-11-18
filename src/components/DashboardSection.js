import React from 'react';
import { Component } from 'reflux';
import AuthStore from '../stores/AuthStore';
import { CardGrid, Card } from './CardGrid';
import GeneticResults from './GeneticResults';
import './DashboardSection.css';

class DashboardSection extends Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.store = AuthStore;
  }

  render() {
    // API url to '/customer/{customerId}/report' would go here
    const reportURL = "https://prenetics.com/img/1ywO9Uk1Hys2giCeWIEwgO_en-US.pdf";

    return (
      <section className="dashboard-section">
        <div className="dashboard-img-fade"></div>
        <div className="content-wrapper">
          <h1>Your personal Dashboard</h1>
          <CardGrid>
            <Card
              title="Personal Details"
              lead="These are the personalized myDNA Reports for:">
              <ul className="personal-details">
                <li>First name: <strong>{ this.state.user.firstname }</strong></li>
                <li>Last name: <strong>{ this.state.user.lastname }</strong></li>
                <li>Email: <strong>{ this.state.user.email }</strong></li>
              </ul>
            </Card>
            <Card
              title="Your Genetic Results"
              lead="See your genetic results below to find out how your genes affect your diet and exercise.">
              <GeneticResults results={this.state.genetic} />
            </Card>
            <Card
              title="Genetic Health Report"
              lead="Download your myDNA Nutrigenomics Report as a PDF. It provides you with powerful information to help you understand how your genetics affects your diet, nutrition and exercise.">
              <a className="btn btn-lg btn-main" href={reportURL} target="_blank">Download PDF</a>
            </Card>
          </CardGrid>
        </div>
      </section>
    );
  }
}

export default DashboardSection;
