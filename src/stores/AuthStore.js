import Reflux from 'reflux';
import Actions from './Actions';

class AuthStore extends Reflux.Store
{
  constructor()
  {
    super();
    this.state = {
      loggedIn: false,
      username: ""
    };
    this.listenTo(Actions.login, this.onLogin);
    this.listenTo(Actions.logout, this.onLogout);
  }

  onLogin(credentials)
  {
    this.setState({loggedIn: true});
  }
  onLogout(credentials)
  {
    this.setState({loggedIn: false});
  }
}

export default AuthStore
