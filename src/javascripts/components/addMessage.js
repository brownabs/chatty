import moment from 'moment';
// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';
// eslint-disable-next-line import/no-cycle
import Delete from './removeAllMessages';

const addMessage = (array) => {
  const messages = array;
  $('#submit').off('click').on('click', () => {
    if ($('#message').val() !== '') {
      const message = {
        id: `message${messages.length + 1}`,
        content: $('#message').val(),
        timeStamp: moment().format('MM/DD/YY, h:mm a'),
        userId: 'localStorageUser'
      };
      console.log(message);
      messages.push(message);
      Print.printMessages(messages);
      Delete.removeAllMessages();
    } else {
      $('#add-message').html('Please enter text');
    }
  });
};

export default { addMessage };
