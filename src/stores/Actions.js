import Reflux from 'reflux';

const Actions = Reflux.createActions([
  "openLoginModal",
  "closeLoginModal",
  "login",
  "logout",
  "downloadReport",
  "viewResults"
]);

export default Actions
