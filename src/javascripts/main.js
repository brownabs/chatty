import '../styles/main.scss';
import { getMessages } from './helpers/data';
import Utils from './helpers/utils';
import Profile from './components/profileModal';

// comment
const init = () => {
  Utils.printMessages(getMessages());
  Profile.profileDetails();
};

init();
