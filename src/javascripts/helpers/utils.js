import Messages from '../components/messageCard';
// eslint-disable-next-line import/no-cycle
import Delete from '../components/deleteMessage';

const printMessages = (array) => {
  $('#messages').html('');
  if (array !== null) {
    array.forEach((message, index) => {
      $('#messages').append(Messages.messageCard(message, index));
      Delete.deleteMessage(index, array);
    });
  } if (array.length === 0) {
    $('#clear').remove();
  }
};

export default { printMessages };
