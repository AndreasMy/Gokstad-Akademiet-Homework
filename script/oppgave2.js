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
const displayThreeFirst = document.querySelector("#displayThreeCities");
const displayFiveLast = document.querySelector("#displayFiveCities");
const displayAmount = document.querySelector("#displayAmount");

const incrBtn = document.querySelector("#incrementButton");
const decrBtn = document.getElementById("decrementButton");

for (i = 0; i < tenCities.length; i++) {
  if (i < 3) {
    displayThreeFirst.innerHTML += `<li>${tenCities[i]}</li>`;
  } else if (i > 4) {
    displayFiveLast.innerHTML += `<li>${tenCities[i]}</li>`;
  }
}

let count = 10;
displayAmount.value = count;

const decrementValue = function () {
  count--;
  displayCities(count);
  displayAmount.value = count;
};

function incrementValue() {
  count++;
  displayCities(count);
  displayAmount.value = count;
}

incrBtn.addEventListener("click", incrementValue);
decrBtn.addEventListener("click", decrementValue);

function displayCities() {
  displayTenCities.innerHTML = "";
  for (i = 0; i < count; i++) {
    displayTenCities.innerHTML += `<li>${tenCities[i]}</li>`;
  }
}
displayCities(count);
