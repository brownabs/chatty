import '../styles/main.scss';
import { getMessages } from './helpers/data';
import Utils from './helpers/utils';
import Message from './components/addMessage';
import Delete from './components/removeAllMessages';
import Text from './components/largeText';
import Dark from './components/darkMode';

// comment
const init = () => {
  Utils.printMessages(getMessages());
  Message.addMessage(getMessages());
  Delete.removeAllMessages();
  Text.largeText();
  Dark.darkMode();
};

init();
