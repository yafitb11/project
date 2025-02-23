
class Player {

    constructor(name, level, points) {
        this.name = name;
        this.level = level;
        this.points = points;
    }
}

let userName;
let level;
let players = JSON.parse(localStorage.getItem('players')) || [];


////name..............
const name1 = document.getElementById("name");
const addName = () => {
    document.getElementById('nameHelper').style.display = "none";
    userName = name1.value;
    if (name1.value == "") { document.getElementById('nameHelper').style.display = "block"; name1.style.border = "red solid 2px"; return; }
    name1.value = "";
    document.getElementById("playerName").innerText = userName;
    document.getElementById("nameDiv").style.display = "none";
    document.getElementById("changePlayerBtn").style.display = "block";
}


let lable1 = document.getElementById("lable");
let count = 0;
let onclicks = 0;
const table = document.getElementById("table");
const select = document.getElementById("level");
const playersTable = document.getElementById("playersTable");
const playersDiv = document.getElementById('playersDiv');
let questionArr = [];
let rightAnswerArr = [];
let givenAnswerArr = [];
let pointsArr = [];
let rightAnswer;

const randomNumberEasy = () => { return Math.ceil(Math.random() * 10); }
const randomNumberMedium = () => { return Math.ceil(Math.random() * 100); }
const randomNumberHard = () => { return Math.ceil(Math.random() * 1000); }

//let randomNumberMedium = Math.ceil(Math.random() * 100);
//let randomNumberHard = Math.ceil(Math.random() * 1000);

let randomOperatorFunction = () => {
    let operatorNum = Math.ceil(Math.random() * 4);
    if (operatorNum == 1) { return "+"; }
    if (operatorNum == 2) { return "-"; }
    if (operatorNum == 3) { return "*"; }
    if (operatorNum == 4) { return "/"; }
}


const getQuestionEasy = () => {
    return `${randomNumberEasy()} ${randomOperatorFunction()} ${randomNumberEasy()}`;
}

const getQuestionMedium = () => {
    return `${randomNumberMedium} ${randomOperatorFunction()} ${randomNumberMedium}`;
}

const getQuestionHard = () => {
    return `${randomNumberHard} ${randomOperatorFunction()} ${randomNumberHard}`;
}



const questionFunctionEasy = () => {
    onclicks++;

    if (onclicks == 11) {
        alert("you have reached " + count + " points");
        buildMainTable();
        table.style.display = "block";
        let user = new Player(userName, level, count);
        players.push(user);
        localStorage.setItem('players', JSON.stringify(players));
        buildPlayersTable();
        select.value = "";
        return;
    }

    let lable;
    if (select.value == "Easy") { lable = getQuestionEasy(); } else if (select.value == "Medium") { lable = getQuestionMedium() } else if (select.value == "Hard") { lable = getQuestionHard() }

    let lableString = JSON.stringify(lable);
    lableString = lableString.slice(1, lableString.length - 1);
    questionArr.push(lableString);
    rightAnswer = eval(lableString);
    rightAnswerArr.push(rightAnswer);
    const lableWritten = document.getElementById("lable");
    lableWritten.innerText = `Question ${onclicks}. ${lableString} =`

}


let inputE = document.getElementById("answer");
const button = document.getElementById("submitBtn");
const recieveAnswerChangeQuestion = () => {
    let givenAnswer = inputE.value;
    givenAnswerArr.push(givenAnswer);
    if (givenAnswer == rightAnswer) {
        pointsArr.push("1");
        count++;
    } else { pointsArr.push("0"); }
    inputE.value = "";
    questionFunctionEasy();
}



//score table........................
const buildMainTable = () => {

    const theader = document.getElementById("theader");
    theader.innerText = `Table Score Level ${select.value}`;
    const rowsArr = [];

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.className = "ex";
        document.getElementById("rows").appendChild(row);
        rowsArr.push(row);
    }

    questionArr.forEach((question, index) => {
        const questionP = document.createElement("p");
        questionP.innerText = question;
        rowsArr[index].appendChild(questionP);
    })

    rightAnswerArr.forEach((rightA, index) => {
        const rightAP = document.createElement("p");
        rightAP.innerText = rightA;
        rowsArr[index].appendChild(rightAP);
    })

    givenAnswerArr.forEach((givenA, index) => {
        const givenAP = document.createElement("p");
        givenAP.innerText = givenA;
        rowsArr[index].appendChild(givenAP);
    })

    pointsArr.forEach((point, index) => {
        const pointsP = document.createElement("p");
        pointsP.innerText = point;
        rowsArr[index].appendChild(pointsP);
    })

    const tscore = document.getElementById("tscore");
    tscore.innerText = `your total score is  ${count} points`;
}


//selection................................................
const selection = () => {

    onclicks = 0;
    count = 0;

    if (document.getElementById("playerName").innerText == "") { alert('please enter your name before starting'); select.value = ""; return; }

    level = select.value;

    const h2 = document.getElementById("h2");
    h2.innerText = `Level ${level}`;

    const input = document.getElementById("answer");
    input.style.display = "block";
    const submit = document.getElementById("submitBtn");
    submit.style.display = "block";
    table.style.display = "none";
    playersTable.style.display = "none";


    if (select.value === "Easy") {

        questionFunctionEasy();



    }


    else if (select.value === "Medium") {

        lable1.innerText = "1. 14+64=?";

        submit.onclick = submitMedium;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Medium";

    }
    else if (select.value === "Hard") {

        lable1.innerText = "1. 351+552=?";

        submit.onclick = submitHard;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Hard";

    }

}


//players table..............

const buildPlayersTable = () => {
    playersDiv.innerHTML = "";

    for (let player of players) {
        const div = document.createElement("div");
        div.className = "ex";
        div.innerHTML = ` <p>${player.name}</p>
                    <p>${player.level}</p>
                    <p>${player.points}</p>`;
        playersDiv.appendChild(div);
    }

    playersTable.style.display = "block";
    console.log(players);

}

//reset players........
const resetPlayers = () => {
    players = [];
    localStorage.setItem('players', JSON.stringify(players));
    playersDiv.innerHTML = "";
}


//reset game...........

resetGame = () => {
    onclicks = 0;
    count = 0;
    select.value = "";
    name1.value == "";
    document.getElementById("nameDiv").style.display = "block";
    document.getElementById("playerName").innerText = "";
    document.getElementById("changePlayerBtn").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("h2").innerText = "";
    lable1.innerText = "";
    table.style.display = "none";
    playersTable.style.display = "none";

}