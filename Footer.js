let footerString = `
<ul>
  <li><img src="/Resources/Images/FVVV-Logo.png" id="footer-logo"></li>
</ul>
<ul>
  <li><h4>About Us</h4></li>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">About Us</a></li>
</ul>
<ul>
  <li><h4>Scheduling</h4></li>
  <li><a href="/MessagingMainPage.html">Message a Provider</a></li>
  <li><a href="/ProvidersMainPage.html">Find a Provider</a></li>
  <li><a href="/AppointmentsMainPage.html">Schedule an Appointment</a></li>
</ul>
<ul>
  <li><h4>Pet Care Resources</h4></li>
  <li><a href="/PetCareBlogMainPage.html">Pet Care Blog</a></li>
</ul>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("footer").innerHTML = footerString;
});