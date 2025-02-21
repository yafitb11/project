
const emojies = ["😊", "😊", "😂", "😂", "🤣", "🤣", "❤️", "❤️", "😍", "😍", "😘", "😘", "👌", "👌", "👍", "👍", "😒", "😒", "😁", "😁"];

let cardsOpenNoMatch = [];
let cardsMatch = [];
const finishSound = new Audio('audio/finish.mp3');
const matchSound = new Audio('audio/match.mp3');
const openCardSound = new Audio('audio/opencard.mp3');
const noMatchSound = new Audio('audio/nomatch.mp3');
const looseSound = new Audio('audio/loose.mp3');
let startTime;
let endTime;
let timer;

const mixCreateEmojies = () => {
    cardsOpenNoMatch = [];
    cardsMatch = [];
    if (timer) {
        clearTimeout(timer);
    }
    startTime = Date.now();

    timer = setTimeout(() => {
        looseSound.play();
        setTimeout(() => { alert("you lost!"); window.location.reload(); }, 200);
    }, 120000);

    emojies.sort(() => Math.random() > 0.5 ? 2 : -1);

    const board = document.getElementById("board");
    board.innerHTML = "";
    emojies.forEach((emoji) => {
        const card = document.createElement("div");
        card.innerText = emoji;
        card.className = "card";
        board.appendChild(card);


        card.addEventListener("click", (e) => {
            if (cardsOpenNoMatch.length >= 2) { return; }
            if (cardsOpenNoMatch.includes(card)) { return; }
            if (cardsMatch.includes(card)) { return; }
            else {
                openCardSound.play();
                card.classList.add("open");
                cardsOpenNoMatch.push(card);

                if (cardsOpenNoMatch.length === 2) {

                    if (cardsOpenNoMatch[0].innerText === cardsOpenNoMatch[1].innerText) {
                        setTimeout(() => { matchSound.play() }, 600);
                        cardsOpenNoMatch[0].classList.add("match");
                        cardsMatch.push(cardsOpenNoMatch[0]);
                        cardsOpenNoMatch[1].classList.add("match");
                        cardsMatch.push(cardsOpenNoMatch[1]);
                        cardsOpenNoMatch = [];

                    } else {
                        setTimeout(() => {
                            noMatchSound.play();
                            cardsOpenNoMatch[1].classList.remove("open");
                            cardsOpenNoMatch[0].classList.remove("open");
                            cardsOpenNoMatch = [];
                        }, 900)
                    }

                }
            }

            if (cardsMatch.length === emojies.length) {
                setTimeout(() => { finishSound.play() }, 200);
                endTime = Date.now();
                let timeTaken = (endTime - startTime) / 1000;
                timeTaken = (timeTaken / 60).toFixed(2);
                setTimeout(() => { alert(`you won! your time: ${timeTaken} minutes!`); }, 500)
            }

        })


    })
}



