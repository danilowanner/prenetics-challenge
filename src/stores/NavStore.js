import Reflux from 'reflux';
import Actions from './Actions';

class NavStore extends Reflux.Store
{
  constructor()
  {
    super();
    this.state = {
      page: "home",
      modals: []
    };
    this.listenTo(Actions.openLoginModal, this.onOpenLoginModal);
    this.listenTo(Actions.closeLoginModal, this.onCloseLoginModal);
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
