import '../styles/main.scss';
import { getMessages } from './helpers/data';
import Utils from './helpers/utils';
// import Profile from './components/profileModal';
import Message from './components/addMessage';
import Delete from './components/removeAllMessages';

// comment
const init = () => {
  Utils.printMessages(getMessages());
  // Profile.profileDetails();
  Message.addMessage();
  Delete.removeAllMessages();
};

init();
