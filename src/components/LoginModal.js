import React from 'react';
import { Component } from 'reflux';
import Actions from '../stores/Actions';
import AuthStore from '../stores/AuthStore';
import './LoginModal.css';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.store = AuthStore;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    Actions.login(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    const fieldClass = this.state.loginInvalid ? "field error" : "field";

    return (
      <div className="modal login-modal">
        <div className="content-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className={fieldClass}>
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleInputChange} />
            </div>
            <div className={fieldClass}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleInputChange} />
            </div>
            <input type="submit" value="Submit" />
          </form>
          {
            !this.state.loginInvalid ?
              []
              :
              <div className="error-message">
                Login failed. Verify your input
              </div>
          }
        </div>
      </div>
    );
  }
}

export default LoginModal;
