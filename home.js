var infoModal = null;
function modalInfo(name) {
    if (infoModal !== null) infoModal.remove();
    infoModal = document.createElement('div');

    if (name === 'Bikes') {
      infoModal.innerHTML = `<div class="modal fade" id="description" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Bikes are fun. The usual type of bike everyone owns!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;    
    } else if (name === 'E-Bikes') {
      infoModal.innerHTML = `<div class="modal fade" id="description" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          Electric Bikes are bicycles with a battery-powered “assist”. 
          E-Bikes are revolutionary! - Recommended by Doctors 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
  
    } else if (name === 'Scooters') {
      infoModal.innerHTML = `<div class="modal fade" id="description" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          Child's toy or individual means of urban transport, consisting of a metal plate mounted on two wheels
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
    } else if (name === 'E-Scooters') {
      infoModal.innerHTML = `<div class="modal fade" id="description" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          Electric scooter is like a scooter many of us have used as kids, 
          but with an added option of running using a built in battery powered motor.
          E-Scooters are revolutionary! - Recommended by Doctors 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
    }
    

  document.body.append(infoModal);
  var modal = new bootstrap.Modal(infoModal.querySelector('.modal'));
  modal.show();
}
