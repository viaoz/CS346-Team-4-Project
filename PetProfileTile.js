let appointmentTileString = ``;

/* Todo: To be completed */
/* This will need refactoring for dynamically loading all appointments in the database */
document.addEventListener("DOMContentLoaded", () => {
  let tiles = document.querySelectorAll(".petTile");
  tiles.forEach((tile) => {
    tile.innerHTML = appointmentTileString;
  })
});
 