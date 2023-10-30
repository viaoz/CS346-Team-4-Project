let appointmentTileString = `<div class="tile full-width" id="appointment-id" >
            <div class="horizontal-tile-content header-with-buttons">
              <span class="tile-title">Provider Name</span>
              <div class="header-buttons-section">
                <button id="edit-appointment-button" class="primary-button">Edit Appointment</button>
                <button id="message-provider-button" class="primary-button">Message Provider</button>
              </div>
            </div>
            <hr>
            <div class="horizontal-tile-content">
              <!-- each appointment entity could be referenced using a 
                   format like appointment-id.<info-name>, 
                   for example: appointment123.date -->
              <div class="vertical-tile-content">
                <span class="tile-header">Date</span>
                <span id="appointment-date">11/02/2023</span>
              </div>
              <div class="vertical-tile-content">
                <span class="tile-header">Clinic</span>
                <span id="clinic-name">Appanasha Pet Clinic</span>
              </div>
              <div class="vertical-tile-content">
                <span class="tile-header">Location</span>
                <span id="clinic-location">1205 Wittman Dr, Menasha, WI 54952</span>
              </div>
              <div class="vertical-tile-content">
                <span class="tile-header">Pet</span>
                <span id="pet-name">Pet Name</span>
              </div>
            </div>
          </div>`;

/* This will need refactoring for dynamically loading all appointments in the database */
document.addEventListener("DOMContentLoaded", () => {
  let tiles = document.querySelectorAll(".appointmentTile");
  tiles.forEach((tile) => {
    tile.innerHTML = appointmentTileString;
  })
});
