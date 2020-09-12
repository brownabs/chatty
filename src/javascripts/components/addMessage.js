// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';
// eslint-disable-next-line import/no-cycle
import Delete from './deleteMessage';

const addMessage = (array) => {
  console.log(array);
  const messages = array;
  debugger;
  $('#submit').off('click').on('click', () => {
    if ($('#message').val() !== '') {
      const message = {
        id: `message${messages.length + 1}`,
        content: $('#message').val(),
        timeStamp: Date(),
        userId: 'localStorageUser'
      };
      messages.push(message);
      Print.printMessages(messages);
      Delete.removeAllMessages();
    } else {
      $('#add-message').html('Please enter text');
    }
  });
};

export default { addMessage };
