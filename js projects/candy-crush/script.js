
const candies = ["Blue", "Green", "Yellow", "Purple", "Orange", "Red"];

const board = []; // the board will have 9 rows and 9 columns
let score = 0;
let currentTile;
let otherTile;
let firstMove = 0;

window.onload = function () {
    startGame();

    window.setInterval(function () {
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);

}

const randomCandy = () => {
    return candies[Math.floor(Math.random() * 6)];
}


const startGame = () => {
    for (let r = 0; r < 9; r++) {
        const row = [];

        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").appendChild(tile);
            row.push(tile);
        }

        board.push(row);
    }
    console.log(board);

}


function dragStart() {
    firstMove++;
    currentTile = this;
}

const dragOver = (e) => {
    e.preventDefault();
}

const dragEnter = (e) => {
    e.preventDefault();
}

const dragLeave = () => {

}

function dragDrop() {
    otherTile = this;
}

const dragEnd = () => {

    if (currentTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    const currCoords = currentTile.id.split("-"); // id="0-0" -> ["0", "0"]
    const r = parseInt(currCoords[0]);
    const c = parseInt(currCoords[1]);

    const otherCoords = otherTile.id.split("-");
    const r2 = parseInt(otherCoords[0]);
    const c2 = parseInt(otherCoords[1]);

    const moveLeft = c2 == c - 1 && r2 == r;
    const moveRight = c2 == c + 1 && r2 == r;
    const moveUp = c2 == c && r2 == r - 1;
    const moveDown = c2 == c && r2 == r + 1;
    const isMovable = moveLeft || moveRight || moveUp || moveDown;

    if (isMovable) {
        const currentImg = currentTile.src;
        const otherImg = otherTile.src;
        currentTile.src = otherImg;
        otherTile.src = currentImg;

        const isValidMove = checkmove();
        if (!isValidMove) {
            const currentImg = currentTile.src;
            const otherImg = otherTile.src;
            currentTile.src = otherImg;
            otherTile.src = currentImg;
        }

    }


}


function crushCandy() {
    crushFive();
    crushFour();
    crushThree();
    if (firstMove === 0) {
        score = 0;
    }
    document.getElementById("score").innerText = score;
}

//crash functions.........................
const crushThree = () => {

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 7; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 30;
                if (firstMove > 0) { new Audio('audio/crush1.mp3').play() }
                return true;
            }
        }
    }

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 7; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 30;
                if (firstMove > 0) { new Audio('audio/crush1.mp3').play() }
                return true;
            }
        }
    }
    return false;
}

const crushFour = () => {

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 6; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            let candy4 = board[r][c + 3];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                score += 40;
                if (firstMove > 0) { new Audio('audio/crush2.mp3').play() }
                return true;
            }
        }
    }

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 6; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            let candy4 = board[r + 3][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                score += 40;
                if (firstMove > 0) { new Audio('audio/crush2.mp3').play() }
                return true;
            }
        }
    }
    return false;
}


const crushFive = () => {

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 5; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            let candy4 = board[r][c + 3];
            let candy5 = board[r][c + 4];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score += 50;
                if (firstMove > 0) { new Audio('audio/crush.mp3').play() }
                if (firstMove > 0) { setTimeout(() => { new Audio('audio/delicious.mp3').play() }, 1000) }
                return true;
            }
        }
    }

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 5; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r + 1][c];
            let candy3 = board[r + 2][c];
            let candy4 = board[r + 3][c];
            let candy5 = board[r + 4][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score += 50;
                if (firstMove > 0) { new Audio('audio/crush3.mp3').play() }
                return true;
            }
        }
    }
    return false;
}


const checkmove = () => {

    if (crushFive()) { return true; } else if (crushFour()) { return true } else { return crushThree(); }
}

//................................

function slideCandy() {
    for (let c = 0; c < 9; c++) {
        let ind = 8;
        for (let r = 8; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;
            }
        }

        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/blank.png";
        }
    }
}


function generateCandy() {
    for (let c = 0; c < 9; c++) {
        if (board[0][c].src.includes("blank")) {
            board[0][c].src = "./images/" + randomCandy() + ".png";
        }
    }
}






