import '../styles/main.scss';
import { getUsers, getMessages } from './helpers/data';

// comment
const init = () => {
  console.log(getMessages());
  console.log(getUsers());
};

init();
