
const emojies = ["😊", "😊", "😂", "😂", "🤣", "🤣", "❤️", "❤️", "😍", "😍", "😘", "😘", "👌", "👌", "👍", "👍", "😒", "😒", "😁", "😁"];

let cardsOpenNoMatch = [];
let cardsMatch = [];

const mixCreateEmojies = () => {
    emojies.sort(() => Math.random() > 0.5 ? 2 : -1);

    const board = document.getElementById("board");
    board.innerHTML = "";
    emojies.forEach((emoji) => {
        const card = document.createElement("div");
        card.innerText = emoji;
        card.className = "card";
        board.appendChild(card);


        card.addEventListener("click", (e) => {
            if (cardsOpenNoMatch.length >= 2) { return; } else {

                card.classList.add("open");
                cardsOpenNoMatch.push(card);

                if (cardsOpenNoMatch.length === 2) {

                    if (cardsOpenNoMatch[0].innerText === cardsOpenNoMatch[1].innerText) {
                        cardsOpenNoMatch[0].classList.add("match");
                        cardsMatch.push(cardsOpenNoMatch[0]);
                        cardsOpenNoMatch[1].classList.add("match");
                        cardsMatch.push(cardsOpenNoMatch[1]);
                        cardsOpenNoMatch = [];

                    } else {
                        setTimeout(() => {
                            cardsOpenNoMatch[1].classList.remove("open");
                            cardsOpenNoMatch[0].classList.remove("open");
                            cardsOpenNoMatch = [];
                        }, 900)
                    }

                }
            }

            if (cardsMatch.length === emojies.length) {
                setTimeout(() => { alert("you won!"); }, 600)
            }

        })


    })
}



