import { getMessages } from '../helpers/data';

const removeAllMessages = () => {
  if ($('#messages').html !== '') {
    $('#clear').on('click', () => {
      $('#messages').remove();
      getMessages().length = 0;
    });
  }
};

export default { removeAllMessages };
