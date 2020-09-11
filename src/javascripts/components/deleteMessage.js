// eslint-disable-next-line import/no-cycle
import Print from '../helpers/utils';

const deleteDinosaur = (index, array) => {
  $(`#delete-${index}`).click(() => {
    array.splice(index, 1);
    Print.printMessages(array);
  });
};

export default { deleteDinosaur };
