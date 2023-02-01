// make array with predictions
// pass throught a function using math random
const magicButton = document.querySelector("#predictBtn");
const displayPrediction = document.querySelector("#displayPrediction");

magicButton.addEventListener("click", () => {
  getPrediction();
});

const predictions = [
  "You will win",
  "You will lose",
  "You will buy chocolate",
  "You will not will, because all will is God's will",
  "Fifty percent chance of snow this evening"
];

function getPrediction() {
  const setPrediction =
    predictions[Math.floor(Math.random() * predictions.length)];
    displayPrediction.innerHTML = `${setPrediction}`

}


