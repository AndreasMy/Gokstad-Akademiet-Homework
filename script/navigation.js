// make loop that changes inerHTML for the nav bar
const navBar = document.querySelector("#navLinks");

for (let i = 1; i <= 5; i++) {
  navBar.innerHTML += `<li class="nav-links"><a href="../pages/oppgave-${i}.html">Oppgave ${i}</a></li>`;
}
