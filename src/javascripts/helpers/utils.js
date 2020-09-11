import Messages from '../components/messageCard';
// eslint-disable-next-line import/no-cycle
import Delete from '../components/deleteMessage';

const printMessages = (array) => {
  $('#currentUserMessages').html('');
  // $('#otherUserMessages').html('');
  if (array !== null) {
    array.forEach((message, index) => {
      $('#currentUserMessages').append(Messages.messageCard(message, index));
      // $('#otherUserMessages').append(messageCard(index, message));
      Delete.deleteDinosaur(index, array);
    });
  }
};

export default { printMessages };
