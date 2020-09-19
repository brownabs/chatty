import moment from 'moment';
// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';
// eslint-disable-next-line import/no-cycle
import Delete from './removeAllMessages';

const addMessage = (array) => {
  const messages = array;
  // think this is why adding messages is buggy;

  $('#submit').off('click').on('click', () => {
    if ($('#message').val() !== '') {
      const message = {
        id: `message${messages.length + 1}`,
        content: $('#message').val(),
        timeStamp: moment().format('MM/DD/YY, h:mm a'),
        userId: 'localStorageUser'
      };
      messages.push(message);
      Print.printMessages(messages);
      Delete.removeAllMessages();
    } else {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      alert('Please enter text');
    }
  });
};

export default { addMessage };
