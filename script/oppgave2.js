const tenCities = [
  "Oslo",
  "Bergen",
  "Stavanger",
  "Trondheim",
  "Fredrikstad",
  "Drammen",
  "Porsgrunn",
  "Kristiansand",
  "Ålesund",
  "Tønsberg",
];

const displayTenCities = document.querySelector("#displayTenCities");
for (i = 0; i < tenCities.length; i++) {
    displayTenCities.innerHTML += `<li>${tenCities[i]}</li>`;
}

// map() for å kopiere til nye arrays?
