const messageCard = (message, index) => {
  const domString = `<div class="card m-1" style="width: 35rem;">
            <div class="card-body md-1 mt-1" style="height: 10rem;">
            <h5 class="d-flex justify-content-center mt-1">${message.content}</h5>
            <h5 class="d-flex justify-content-center mt-1">${message.timeStamp}</h5>
            <span id="delete-${index}"><i class="fas fa-times-circle"></i></span>
            </div>
          </div>
        </div>`;

  return domString;
};

export default { messageCard };
