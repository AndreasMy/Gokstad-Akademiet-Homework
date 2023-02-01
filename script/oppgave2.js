// Oppgave 2

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

displayAmount.disabled = true;
let count = 10;
displayAmount.value = count;

const decrementValue = function () {
  count--;
  displayCities(count);
  displayAmount.value = count;
  if (count < 1) {
    decrBtn.disabled = true;
  }
  incrBtn.disabled = false;
};

function incrementValue() {
  count++;
  displayCities(count);
  displayAmount.value = count;
  if (count == tenCities.length) {
    incrBtn.disabled = true;
  }
  decrBtn.disabled = false;
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

// TODO
// make sure to disable input field to only show count value
//disable buttones to prevent from adding undefined to the list
// ? if count === tenCities.lenght incrBtn.disable = true
