import { getUsers } from '../helpers/data';
import Print from '../helpers/utils';

const selectUser = () => {
  $('#select-users').append(`
  <div class="dropdown">
  <h5 id="user-name-here"><h5>
  <button id="user-label" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select User
  </button>
  <div class="dropdown-menu" aria-labelledby="user-label">
</div> 
</div>`);
};
const dropDown = () => {
  $('.dropdown').click((e) => {
    const target = e.target.id;
    e.stopPropagation();
    if (target === 'user-label') {
      $('.dropdown-menu').html('');
      $('#user-name-here').html('');
      $('.dropdown-menu').toggle();
      getUsers().forEach((user) => $('.dropdown-menu').append(`
      <ul>
      <label>
      <input type="checkbox" id="radio-button" name="user-name" value="${user.name}"><br>
      ${user.name}
      </label>
      <ul>`));
    } if (target === 'radio-button') {
      const user = [];
      const userSelected = $('input[name="user-name"]:checked').val();
      $('#user-name-here').append('Selected User');
      $('#user-label').html('');
      $('#user-label').append(`${userSelected}`);
      $('.dropdown-menu').toggle();
      user.push(userSelected);
      Print.printSelectedUserMessages(user);
    }
  });
};

export default { selectUser, dropDown };
