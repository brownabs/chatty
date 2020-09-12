import { getMessages } from '../helpers/data';
// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';

const addMessage = () => {
  const messages = getMessages();
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
    } else {
      $('#add-message').html('Please enter text');
    }
  });
};

export default { addMessage };
