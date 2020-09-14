import { getUsers } from '../helpers/data';

const selectUser = () => {
  $('#select-users').append(`
  <div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select User
  </button>
  <div class="dropdown-menu" aria-labelledby="dLabel">
</div> 
</div>`);
};

const userSelection = (e) => {
  if (e !== undefined) {
    const user = e.target.id;
    console.log(user);
  }
};
const dropDown = () => {
  $('.dropdown').click(() => {
    $('.dropdown-menu').html('');
    $('.dropdown-menu').toggle();
    getUsers().forEach((user) => $('.dropdown-menu').append(`
    <ul>
    <label>
    <input type="checkbox" id="button" name="user-name" value="${user.name}"><br>
    ${user.name}
    </label>
    <ul>`));
  });
  $('#button').click(() => {
    $('#dLabel').html('stupid');
  });
};

$('#button').on('change', userSelection());

export default { selectUser, dropDown };
