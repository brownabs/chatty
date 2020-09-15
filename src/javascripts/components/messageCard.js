import { getUsers } from '../helpers/data';

const messageCard = (message, index) => {
  const matchingUsers = getUsers().filter((user) => user.id === message.userId);
  const domString = `<div class="card m-1" style="width: 25rem;">
            <div class="card-body md-1 mt-1">
            <h5 class="d-flex justify-content-center mt-1">${matchingUsers[0].name}</h5>
            <h5 class="d-flex justify-content-center mt-1">${message.content}</h5>
            <h5 class="d-flex justify-content-center mt-1">${message.timeStamp}</h5>
            <button type="button" class="btn btn-danger m1" style="width:5rem" id="delete-${index}"><i class="fas fa-trash-alt p-1"></i></button>
            </div>
          </div>
        </div>`;

  return domString;
};

export default { messageCard };
