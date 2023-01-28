const inputFullName = document.querySelector("#fullName");
const inputAge = document.querySelector("#age");
const inputCity = document.querySelector("#city");
const inputCountry = document.querySelector("#country");

const displName = document.querySelector("#displayFullName");
const displAge = document.querySelector("#displayAge");
const displCity = document.querySelector("#displayCity");
const displCountry = document.querySelector("#displayCountry");

displName.innerHTML = `Name: ${inputFullName.value}`;
displAge.innerHTML = `Age :${inputAge.value}`;
displCity.innerHTML = `City: ${inputCity.value}`;
displCountry.innerHTML = `Country: ${inputCountry.value}`

console.log(`${inputAge.value}`);



// Solve how to make the card appear on click
// implement validation functionality

