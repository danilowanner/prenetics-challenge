import Reflux from 'reflux';

const Actions = Reflux.createActions([
  "openLoginModal",
  "closeLoginModal",
  "login",
  "logout",
  "navToDashboard",
  "navToHome"
]);

export default Actions
