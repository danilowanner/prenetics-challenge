import Reflux from 'reflux';
import Actions from './Actions';
import fakeFetch from '../helpers/fakeFetch';

class AuthStore extends Reflux.Store
{
  constructor()
  {
    super();
    this.state = {
      loggedIn: false,
      loginInvalid: false,
      user: {},
      genetic: [],
    };
    this.listenTo(Actions.login, this.onLogin);
    this.listenTo(Actions.logout, this.onLogout);
  }

  onLogin(username, password)
  {
    const payload = {
      username: username,
      password: password,
    }
    // API call to '/customer/login' would go here
    // Using a mock function which returns the appropriate response
    fakeFetch('/customer/login', payload)
      .then(value => {
        if(value.token !== undefined) {
          this.setState({
            loggedIn: true,
            loginInvalid: false,
            token: value.token
          });
          Actions.closeLoginModal();
          Actions.navToDashboard();
          this.loadUserData();
          this.loadGeneticData();
        }
        else {
          this.setState({
            loginInvalid: true
          });
        }
      });
  }
  onLogout()
  {
    // API call to '/customer/logout' would go here
    // Using a mock function which returns the appropriate response
    fakeFetch('/customer/logout')
      .then(value => {
        this.setState({loggedIn: false});
        Actions.navToHome();
      });
  }
  loadUserData()
  {
    // API call to '/customer/{customerId}/user' would go here
    // Using a mock function which returns the appropriate response
    fakeFetch('/customer/{customerId}/user')
      .then(value => {
        this.setState({user: value});
      });
  }
  loadGeneticData()
  {
    // API call to '/customer/{customerId}/user' would go here
    // Using a mock function which returns the appropriate response
    fakeFetch('/customer/{customerId}/genetic')
      .then(value => {
        this.setState({genetic: value});
      });
  }
}

export default AuthStore
