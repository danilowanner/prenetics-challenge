import Reflux from 'reflux';
import Actions from './Actions';

class NavStore extends Reflux.Store
{
  constructor()
  {
    super();
    this.state = {
      view: "HOME",
      modals: []
    };
    // Attach navigation listeners
    this.listenTo(Actions.navToDashboard, this.onNavToDashboard);
    this.listenTo(Actions.navToHome, this.onNavToHome);

    // Attach modal listeners
    this.listenTo(Actions.openLoginModal, this.onOpenLoginModal);
    this.listenTo(Actions.closeLoginModal, this.onCloseLoginModal);
  }

  onNavToDashboard()
  {
    this.setState({view: "DASHBOARD"});
  }
  onNavToHome()
  {
    this.setState({view: "HOME"});
  }
  onOpenLoginModal()
  {
    this.setState({modals: ["LOGIN"]});
  }
  onCloseLoginModal()
  {
    this.setState({modals: []});
  }
}

export default NavStore
