// Oppgave 1

console.log('Hello world');

const promptBtn = document.querySelector('#triggerAlert');
promptBtn.addEventListener("click", () => {
    displayMovies()
})

function displayMovies() {
    const favMovies = ["Fellowship Of The Ring", "Spirited Away", "Don't know"]
    for (i = 0; i < favMovies.length; i++) {
        alert(favMovies[i]);
    }
}