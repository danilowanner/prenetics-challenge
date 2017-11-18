import Reflux from 'reflux';

const Actions = Reflux.createActions([
  "openLoginModal",
  "closeLoginModal",
  "login",
  "logout",
  "navToDashboard",
  "navToHome",
  "downloadReport",
  "viewResults"
]);

export default Actions
