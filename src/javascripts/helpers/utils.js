import Messages from '../components/messageCard';
// eslint-disable-next-line import/no-cycle
import Delete from '../components/deleteMessage';

const printMessages = (array) => {
  $('#messages').html('');
  console.log(array);
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

export default { printMessages };
