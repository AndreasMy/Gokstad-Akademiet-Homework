const inputField = document.querySelector("#inputField");

const keyWords = [
  "blue",
  "violet",
  "orange",
  "red",
  "yellow",
  "gray",
  "silver",
  "black",
  "maroon",
  "aqua",
];

inputField.oninput = function () {
  document.body.style.backgroundColor = inputField.value;
};

//todo: associate words with colors?
//todo:
