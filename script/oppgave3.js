// Inputs
const inputFullName = document.querySelector("#fullName");
const inputAge = document.querySelector("#age");
const inputCity = document.querySelector("#city");
const inputCountry = document.querySelector("#country");

// To InnerHTML
const displName = document.querySelector("#displayFullName");
const displAge = document.querySelector("#displayAge");
const displCity = document.querySelector("#displayCity");
const displCountry = document.querySelector("#displayCountry");

//Button
const submitBtn = document.querySelector("#generatePerson");

submitBtn.addEventListener("click", () => {
    displayInputValues();
})

function displayInputValues() {
  displName.innerHTML = `${inputFullName.value}`;
  displAge.innerHTML = `${inputAge.value}`;
  displCity.innerHTML = `${inputCity.value}`;
  displCountry.innerHTML = `${inputCountry.value}`;
}


// !assign everything to their own function and dump them all into one fucking button
//! Gut the card class and dump it in there as innerHTML with js
//? implement validation functionality
