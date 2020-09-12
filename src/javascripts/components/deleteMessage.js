// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';
// eslint-disable-next-line import/no-cycle
import Add from './addMessage';

const deleteMessage = (index, array) => {
  $(`#delete-${index}`).click(() => {
    array.splice(index, 1);
    Print.printMessages(array);
    Add.addMessage(array);
  });
};

export default { deleteMessage };
