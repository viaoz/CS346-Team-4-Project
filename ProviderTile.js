let appointmentTileString = `<div class="tile full-width" id="appointment-id" >
<div class="horizontal-content header-with-buttons">
  <span class="tile-title">Provider Name</span>
  <div class="header-buttons-section">
    <button id="remove-provider" class="primary-button">Remove Provider</button>
  </div>
</div>
<hr>
<div class="horizontal-content">
  <div class="vertical-content">
    <span class="tile-header">Specialty</span>
    <span id="provider-specialty" class="tile-normal-text">Specialty</span>
  </div>
  <div class="vertical-content">
    <span class="tile-header">Clinic</span>
    <span id="provider-clinic" class="tile-normal-text">Appanasha Pet Clinic</span>
  </div>
  <div class="vertical-content">
    <span class="tile-header">Pet(s)</span>
    <span id="pet-name" class="tile-normal-text">Pet Name, pet name 2</span>
  </div>
</div>
</div>`;

/* This will need refactoring for dynamically loading all appointments in the database */
document.addEventListener("DOMContentLoaded", () => {
  let tiles = document.querySelectorAll(".providerTile");
  tiles.forEach((tile) => {
    tile.innerHTML = appointmentTileString;
  })
});
