import { getMessages } from '../helpers/data';

const removeAllMessages = () => {
  if ($('#messages').html !== '') {
    $('#clear').off('click').on('click', () => {
      $('#messages').html('');
      getMessages().length = 0;
    });
  }
};

export default { removeAllMessages };
