import { getMessages } from '../helpers/data';
// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';

const addMessage = () => {
  $('#add-message').html(`<form class="form-inline" id="message-form">
  <input class="form-control-lg mr-sm-2" id="message-input" type="text" placeholder="type message...">
    </form>
      <button class="btn btn-outline-success btn-lg  mx-4 my-2 my-sm-0" type="submit" id="submit">Send</button>`);

  $('#submit').on('click', () => {
    let message = {};
    const messages = getMessages();
    if ($('.form-control').val() !== '') {
      const id = $('#id').val();
      const content = $('#message-input').val();
      const timeStamp = Date();
      const userId = $('#type').val();

      message = {
        id,
        content,
        timeStamp,
        userId,
      };

      $('#add-message').html('');
      messages.push(message);
      Print.printMessages(messages);
    } else {
      $('#add-message').html('Please enter a message');
    }
  });
};

export default { addMessage };
