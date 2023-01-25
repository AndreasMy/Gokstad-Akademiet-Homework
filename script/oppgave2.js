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

const firstThree = [];
const lastFive = [];

const displayTenCities = document.querySelector("#displayTenCities");
const displayThreeFirst = document.querySelector("#displayThreeCities");
const displayFiveLast = document.querySelector("#displayFiveCities");

for (i = 0; i < tenCities.length; i++) {
  displayTenCities.innerHTML += `<li>${tenCities[i]}</li>`;
  
  if (i < 3) {
      firstThree.splice(3, 0, tenCities[i]);
      displayThreeFirst.innerHTML += `<li>${firstThree[i]}</li>`;
  } else if (i > 4) {
    lastFive.splice(5, 0, tenCities[i]);
    displayFiveLast.innerHTML += `<li>${lastFive[i]}</li>`;
  }
}

// map() for å kopiere til nye arrays?

console.log(tenCities);
console.log(firstThree);
console.log(lastFive);
