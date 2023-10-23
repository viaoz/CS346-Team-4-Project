// !---TODO: We should probably change this into an event listener !--- //
function toggleMenu(){
    let mobileVerticalMenu = document.getElementById('nav-links');
    if (getComputedStyle(mobileVerticalMenu).display === 'none') {
        mobileVerticalMenu.style.display = 'block';
    } else {
        mobileVerticalMenu.style.display = 'none';
    }
}
