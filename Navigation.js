let headerString = `
<div class="nav-content">
  <div id="nav-mobile-elements">
    <a href="/HomePage.html" class="nav-logo"><img src="/Resources/Images/FVVV-logo.png" alt="Fox Valley Virtual Vet logo"></a>
    <button onclick="toggleMenu()" id="nav-mobile-menu-button"><img src="/Resources/Images/menu.png" id="menu-icon"></button>
  </div>
  <ul id="nav-links">
    <li class="nav-link">
      <a href="/MessagingMainPage.html">Messaging</a>
    </li>
    <li class="nav-link">
      <a href="/AppointmentsMainPage.html">Appointments</a>
    </li>
    <li class="nav-link">
      <a href="/ProvidersMainPage.html">Providers</a>
    </li>
    <li class="nav-link">
      <a href="/PetCareBlogMainPage.html" class="nav-link">Care Blog</a>
    </li>
    <li class="profile-options">
      <a href="/SignInPage.html" class="primary-button">Sign In</a>
      <a href="/CreateAnAccountPage.html" class="tertiary-button">Create an Account</a>
      <a href="/UserProfilePage.html" class="user-icon"><img src="Resources/Images/user-icon.png"></a>
    </li>
  </ul>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav").innerHTML = headerString;
});