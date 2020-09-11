// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';
// eslint-disable-next-line import/no-cycle
import Add from './addMessage';

const deleteDinosaur = (index, array) => {
  $(`#delete-${index}`).click(() => {
    array.splice(index, 1);
    Print.printMessages(array);
    Add.addMessage();
  });
};

export default { deleteDinosaur };
