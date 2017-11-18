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
      username: ""
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
    fakeFetch('/customer/logout')
      .then(value => {
        this.setState({loggedIn: false});
      });
  }
}

export default AuthStore
