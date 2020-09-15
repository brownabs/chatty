import Messages from '../components/messageCard';
// eslint-disable-next-line import/no-cycle
import Delete from '../components/deleteMessage';
import { getMessages, getUsers } from './data';

const printMessages = (array) => {
  $('#messages').html('');
  const newArray = array.filter((i, index) => (index < 20));
  if (newArray !== null) {
    newArray.forEach((message, index) => {
      $('#messages').append(Messages.messageCard(message, index));
      Delete.deleteMessage(index, newArray);
    });
  } if (newArray.length === 0) {
    $('#clear').remove();
  }
};

const printSelectedUserMessages = (array) => {
  $('#messages').html('');
  const currentUser = getUsers().filter((user) => user.name === array[0]);
  currentUser.forEach((user) => {
    const filteredMessages = getMessages().filter((message) => message.userId === user.id);
    if (filteredMessages !== null) {
      filteredMessages.forEach((message, index) => {
        $('#messages').append(Messages.messageCard(message, index, currentUser));
        Delete.deleteMessage(index, filteredMessages);
      });
    } if (filteredMessages.length === 0) {
      $('#clear').remove();
    }
  });
};

export default { printMessages, printSelectedUserMessages };
