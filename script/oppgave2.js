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

let firstThree = [];
let lastFive = [];

const displayTenCities = document.querySelector("#displayTenCities");
const displayThreeFirst = document.querySelector("#displayThreeCities");
const displayFiveLast = document.querySelector("#displayFiveCities");

/* for (i = 0; i < tenCities.length; i++) {
  displayTenCities.innerHTML += `<li>${tenCities[i]}</li>`;
  lastFive.splice(0, 0, tenCities[i]);
  console.log(`add ${lastFive}`);

  if (i < 3) {
    firstThree.splice(3, 0, tenCities[i]);
    displayThreeFirst.innerHTML += `<li>${firstThree[i]}</li>`;
  }

  if (i > 4) {
    const newArr = lastFive.shift();
    displayFiveLast.innerHTML += `<li>${newArr}</li>`;
    console.log(`shift ${newArr}`);
  }
}

console.log(tenCities);
console.log(firstThree);
console.log(lastFive); */



for (i = 0; i < tenCities.length; i++) {
  displayTenCities.innerHTML += `<li>${tenCities[i]}</li>`;
  if (i < 3) {
    displayThreeFirst.innerHTML += `<li>${tenCities[i]}</li>`;
  } else if (i > 4) {
    displayFiveLast.innerHTML += `<li>${tenCities[i]}</li>`;
  }
}
