const profileDetails = () => {
  const profileInfo = document.getElementById('add-dino');
  profileInfo.innerHTML(` 
    <div class="modal fade" id="dino-modal" tabindex="-1" role="dialog" aria-labelledby="add-dinosaur" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="add-dinosaur">Add Dinosaur</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="cart-items">
            <table class="table table-hover">
              <thead>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div class="modal-body">
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="submit">Add Dinosaur</button>
          </div>
        </div>
      </div>
    </div>
          <button class="btn btn-dark" data-toggle="modal" data-target="#dino-modal">Profile</button>
      </div>`);
  return profileInfo;
};

export default { profileDetails };
