let countDownDate = new Date(2023,4,15,0,0,0)
console.log(countDownDate);

let daysElem = document.querySelector("#days span")
let hoursElem = document.querySelector("#hours span")
let minutesElem = document.querySelector("#minutes span")
let secondsElem = document.querySelector("#seconds span")
let timerId = 0
let test = 5000

// Fonction pour le début du compte à rebours
function startCountdown() {
    let date = new Date()
    let diff = countDownDate - date
    let dayGlobal = Math.floor(diff/24/3600/1000);
    let hoursGlobal = Math.floor(diff/3600/1000);
    let minutesGlobal = Math.floor(diff/60/1000);
    let secondsGlobal = Math.floor(diff/1000);

    let daysCounter = dayGlobal;
    console.log(daysCounter)
    let hoursCounter = hoursGlobal - (dayGlobal * 24)
    console.log(hoursCounter)
    let minutesCounter = minutesGlobal - (hoursGlobal * 60)
    console.log(minutesCounter)
    let secondsCounter = secondsGlobal - (minutesGlobal * 60)
    console.log(secondsCounter)

    // Afficher les informations dans le web
    daysElem.textContent = daysCounter
    hoursElem.textContent = hoursCounter
    minutesElem.textContent = minutesCounter
    secondsElem.textContent = secondsCounter
    if (diff < 1) {
        endCountdown();
    }
    formatTimeStr()
}

// Démarrage du compte à rebours
let intervall = setInterval(() => {
    startCountdown();
}, 1000);

// Fonction pour la fin du compte à rebours
function endCountdown() {
    // Ajout de confetti sur la page 
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    clearInterval(intervall)
}

// Bonus

function formatTimeStr() {
    document.querySelector('#days').lastChild.textContent = daysElem.textContent < 2 ? "Jour" : "Jours";
    document.querySelector('#hours').lastChild.textContent = hoursElem.textContent < 2 ? "Heure" : "Heures";
    document.querySelector('#minutes').lastChild.textContent = minutesElem.textContent < 2 ? "Minute" : "Minutes";
    document.querySelector('#seconds').lastChild.textContent = secondsElem.textContent < 2 ? "Seconde" : "Secondes";
}

