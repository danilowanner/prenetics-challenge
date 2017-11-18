import React, { Component } from 'react';
import Actions from '../stores/Actions';
import './LoginModal.css';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

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
    return (
      <div className="modal login-modal">
        <div className="content-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleInputChange} />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleInputChange} />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginModal;
