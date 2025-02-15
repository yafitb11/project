
const name1 = document.getElementById("name");

const addName = () => {
    console.log(name1.value);
    localStorage.setItem("name", name1.value);
}


let lable1 = document.getElementById("lable");
let count = 0;
let onclicks = 0;

const submitEasy = () => {
    onclicks++;
    const inputE = document.getElementById("answer");

    switch (onclicks) {
        case 1:
            const q1 = document.getElementById("q1");
            q1.innerText = "3+5";
            const ra1 = document.getElementById("ra1");
            ra1.innerText = "8";
            const a1 = document.getElementById("a1");
            a1.innerText = inputE.value;
            const p1 = document.getElementById("p1");
            p1.innerText = "0";
            if (inputE.value == 8) {
                count++;
                p1.innerText = "1";
            }
            lable1.innerHTML = "2. 5-3=?";
            inputE.value = "";
            break;

        case 2:
            const q2 = document.getElementById("q2");
            q2.innerText = "5-3";
            const ra2 = document.getElementById("ra2");
            ra2.innerText = "2";
            const a2 = document.getElementById("a2");
            a2.innerText = inputE.value;
            const p2 = document.getElementById("p2");
            p2.innerText = "0";
            if (inputE.value == 2) {
                count++;
                p2.innerText = "1";
            }
            lable1.innerHTML = "3. 6+3=?";
            inputE.value = "";
            break;

        case 3:
            const q3 = document.getElementById("q3");
            q3.innerText = "6+3";
            const ra3 = document.getElementById("ra3");
            ra3.innerText = "9";
            const a3 = document.getElementById("a3");
            a3.innerText = inputE.value;
            const p3 = document.getElementById("p3");
            p3.innerText = "0";
            if (inputE.value == 9) {
                count++;
                p3.innerText = "1";
            }
            lable1.innerHTML = "4. 8-2=?";
            inputE.value = "";
            break;

        case 4:
            const q4 = document.getElementById("q4");
            q4.innerText = "8-2";
            const ra4 = document.getElementById("ra4");
            ra4.innerText = "6";
            const a4 = document.getElementById("a4");
            a4.innerText = inputE.value;
            const p4 = document.getElementById("p4");
            p4.innerText = "0";
            if (inputE.value == 6) {
                count++;
                p4.innerText = "1";
            }
            lable1.innerHTML = "5. 3*2=?";
            inputE.value = "";
            break;

        case 5:
            const q5 = document.getElementById("q5");
            q5.innerText = "3*2";
            const ra5 = document.getElementById("ra5");
            ra5.innerText = "6";
            const a5 = document.getElementById("a5");
            a5.innerText = inputE.value;
            const p5 = document.getElementById("p5");
            p5.innerText = "0";
            if (inputE.value == 6) {
                count++;
                p5.innerText = "1";
            }
            lable1.innerHTML = "6. 7/7=?";
            inputE.value = "";
            break;

        case 6:
            const q6 = document.getElementById("q6");
            q6.innerText = "7/7";
            const ra6 = document.getElementById("ra6");
            ra6.innerText = "1";
            const a6 = document.getElementById("a6");
            a6.innerText = inputE.value;
            const p6 = document.getElementById("p6");
            p6.innerText = "0";
            if (inputE.value == 1) {
                count++;
                p6.innerText = "1";
            }
            lable1.innerHTML = "7. 4*2=?";
            inputE.value = "";
            break;

        case 7:
            const q7 = document.getElementById("q7");
            q7.innerText = "4*2";
            const ra7 = document.getElementById("ra7");
            ra7.innerText = "8";
            const a7 = document.getElementById("a7");
            a7.innerText = inputE.value;
            const p7 = document.getElementById("p7");
            p7.innerText = "0";
            if (inputE.value == 8) {
                count++;
                p7.innerText = "1";
            }
            lable1.innerHTML = "8. 9/3=?";
            inputE.value = "";
            break;

        case 8:
            const q8 = document.getElementById("q8");
            q8.innerText = "9/3";
            const ra8 = document.getElementById("ra8");
            ra8.innerText = "3";
            const a8 = document.getElementById("a8");
            a8.innerText = inputE.value;
            const p8 = document.getElementById("p8");
            p8.innerText = "0";
            if (inputE.value == 3) {
                count++;
                p8.innerText = "1";
            }
            lable1.innerHTML = "9. 9-4=?";
            inputE.value = "";
            break;


        case 9:
            const q9 = document.getElementById("q9");
            q9.innerText = "9-4";
            const ra9 = document.getElementById("ra9");
            ra9.innerText = "5";
            const a9 = document.getElementById("a9");
            a9.innerText = inputE.value;
            const p9 = document.getElementById("p9");
            p9.innerText = "0";
            if (inputE.value == 5) {
                count++;
                p9.innerText = "1";
            }
            lable1.innerHTML = "10. 2+7=?";
            inputE.value = "";
            break;

        case 10:
            const q10 = document.getElementById("q10");
            q10.innerText = "2+7";
            const ra10 = document.getElementById("ra10");
            ra10.innerText = "9";
            const a10 = document.getElementById("a10");
            a10.innerText = inputE.value;
            const p10 = document.getElementById("p10");
            p10.innerText = "0";
            if (inputE.value == 9) {
                count++;
                p10.innerText = "1";
            }
            alert("you have reached " + count + " points");
            const table = document.getElementById("table");
            table.style.display = "block";
            const tscore = document.getElementById("tscore");
            tscore.innerText = `your total score is  ${count} points`;
            onclicks = 0;
            break;

        default:
            break;
    }

    console.log(count);
    localStorage.setItem("scoreE", count);

}



const submitMedium = () => {
    onclicks++;
    const inputE = document.getElementById("answer");

    switch (onclicks) {
        case 1:
            const q1 = document.getElementById("q1");
            q1.innerText = "14+64";
            const ra1 = document.getElementById("ra1");
            ra1.innerText = "78";
            const a1 = document.getElementById("a1");
            a1.innerText = inputE.value;
            const p1 = document.getElementById("p1");
            p1.innerText = "0";
            if (inputE.value == 78) { count++; }
            lable1.innerHTML = "2. 25-15=?";
            inputE.value = "";
            break;

        case 2:
            const q2 = document.getElementById("q2");
            q2.innerText = "25-15";
            const ra2 = document.getElementById("ra2");
            ra2.innerText = "10";
            const a2 = document.getElementById("a2");
            a2.innerText = inputE.value;
            const p2 = document.getElementById("p2");
            p2.innerText = "0";
            if (inputE.value == 10) {
                count++;
                p2.innerText = "1";
            }
            lable1.innerHTML = "3. 67+17=?";
            inputE.value = "";
            break;

        case 3:
            const q3 = document.getElementById("q3");
            q3.innerText = "67+17";
            const ra3 = document.getElementById("ra3");
            ra3.innerText = "84";
            const a3 = document.getElementById("a3");
            a3.innerText = inputE.value;
            const p3 = document.getElementById("p3");
            p3.innerText = "0";
            if (inputE.value == 84) {
                count++;
                p3.innerText = "1";
            }
            lable1.innerHTML = "4. 82-21=?";
            inputE.value = "";
            break;

        case 4:
            const q4 = document.getElementById("q4");
            q4.innerText = "82-21";
            const ra4 = document.getElementById("ra4");
            ra4.innerText = "61";
            const a4 = document.getElementById("a4");
            a4.innerText = inputE.value;
            const p4 = document.getElementById("p4");
            p4.innerText = "0";
            if (inputE.value == 61) {
                count++;
                p4.innerText = "1";
            }
            lable1.innerHTML = "5. 30*3=?";
            inputE.value = "";
            break;

        case 5:
            const q5 = document.getElementById("q5");
            q5.innerText = "30*3";
            const ra5 = document.getElementById("ra5");
            ra5.innerText = "90";
            const a5 = document.getElementById("a5");
            a5.innerText = inputE.value;
            const p5 = document.getElementById("p5");
            p5.innerText = "0";
            if (inputE.value == 90) {
                count++;
                p5.innerText = "1";
            }
            lable1.innerHTML = "6. 64/8=?";
            inputE.value = "";
            break;

        case 6:
            const q6 = document.getElementById("q6");
            q6.innerText = "64/8";
            const ra6 = document.getElementById("ra6");
            ra6.innerText = "8";
            const a6 = document.getElementById("a6");
            a6.innerText = inputE.value;
            const p6 = document.getElementById("p6");
            p6.innerText = "0";
            if (inputE.value == 8) {
                count++;
                p6.innerText = "1";
            }
            lable1.innerHTML = "7. 43*2=?";
            inputE.value = "";
            break;

        case 7:
            const q7 = document.getElementById("q7");
            q7.innerText = "43*2";
            const ra7 = document.getElementById("ra7");
            ra7.innerText = "86";
            const a7 = document.getElementById("a7");
            a7.innerText = inputE.value;
            const p7 = document.getElementById("p7");
            p7.innerText = "0";
            if (inputE.value == 86) {
                count++;
                p7.innerText = "1";
            }
            lable1.innerHTML = "8. 93/3=?";
            inputE.value = "";
            break;

        case 8:
            const q8 = document.getElementById("q8");
            q8.innerText = "93/3";
            const ra8 = document.getElementById("ra8");
            ra8.innerText = "31";
            const a8 = document.getElementById("a8");
            a8.innerText = inputE.value;
            const p8 = document.getElementById("p8");
            p8.innerText = "0";
            if (inputE.value == 31) {
                count++;
                p8.innerText = "1";
            }
            lable1.innerHTML = "9. 91-45=?";
            inputE.value = "";
            break;


        case 9:
            const q9 = document.getElementById("q9");
            q9.innerText = "91-45";
            const ra9 = document.getElementById("ra9");
            ra9.innerText = "46";
            const a9 = document.getElementById("a9");
            a9.innerText = inputE.value;
            const p9 = document.getElementById("p9");
            p9.innerText = "0";
            if (inputE.value == 46) {
                count++;
                p9.innerText = "1";
            }
            lable1.innerHTML = "10. 28+67=?";
            inputE.value = "";
            break;

        case 10:
            const q10 = document.getElementById("q10");
            q10.innerText = "28+67";
            const ra10 = document.getElementById("ra10");
            ra10.innerText = "95";
            const a10 = document.getElementById("a10");
            a10.innerText = inputE.value;
            const p10 = document.getElementById("p10");
            p10.innerText = "0";
            if (inputE.value == 95) {
                count++;
                p10.innerText = "1";
            }
            alert("you have reached " + count + " points");
            const table = document.getElementById("table");
            table.style.display = "block";
            onclicks = 0;
            break;

        default:
            break;
    }

    console.log(count);
    localStorage.setItem("scoreM", count);

}




const submitHard = () => {
    onclicks++;
    const inputE = document.getElementById("answer");

    switch (onclicks) {
        case 1:
            const q1 = document.getElementById("q1");
            q1.innerText = "351+552";
            const ra1 = document.getElementById("ra1");
            ra1.innerText = "903";
            const a1 = document.getElementById("a1");
            a1.innerText = inputE.value;
            const p1 = document.getElementById("p1");
            p1.innerText = "0";
            if (inputE.value == 903) {
                count++;
                p1.innerText = "1";
            }
            lable1.innerHTML = "2. 502-37=?";
            inputE.value = "";
            break;

        case 2:
            const q2 = document.getElementById("q2");
            q2.innerText = "502-37";
            const ra2 = document.getElementById("ra2");
            ra2.innerText = "465";
            const a2 = document.getElementById("a2");
            a2.innerText = inputE.value;
            const p2 = document.getElementById("p2");
            p2.innerText = "0";
            if (inputE.value == 465) {
                count++;
                p2.innerText = "1";
            }
            lable1.innerHTML = "3. 609-327=?";
            inputE.value = "";
            break;

        case 3:
            const q3 = document.getElementById("q3");
            q3.innerText = "609-327";
            const ra3 = document.getElementById("ra3");
            ra3.innerText = "282";
            const a3 = document.getElementById("a3");
            a3.innerText = inputE.value;
            const p3 = document.getElementById("p3");
            p3.innerText = "0";
            if (inputE.value == 282) {
                count++;
                p3.innerText = "1";
            }
            lable1.innerHTML = "4. 82*3=?";
            inputE.value = "";
            break;

        case 4:
            const q4 = document.getElementById("q4");
            q4.innerText = "82*3";
            const ra4 = document.getElementById("ra4");
            ra4.innerText = "246";
            const a4 = document.getElementById("a4");
            a4.innerText = inputE.value;
            const p4 = document.getElementById("p4");
            p4.innerText = "0";
            if (inputE.value == 246) {
                count++;
                p4.innerText = "1";
            }
            lable1.innerHTML = "5. 303/3=?";
            inputE.value = "";
            break;

        case 5:
            const q5 = document.getElementById("q5");
            q5.innerText = "303/3";
            const ra5 = document.getElementById("ra5");
            ra5.innerText = "101";
            const a5 = document.getElementById("a5");
            a5.innerText = inputE.value;
            const p5 = document.getElementById("p5");
            p5.innerText = "0";
            if (inputE.value == 101) {
                count++;
                p5.innerText = "1";
            }
            lable1.innerHTML = "6. 747/3=?";
            inputE.value = "";
            break;

        case 6:
            const q6 = document.getElementById("q6");
            q6.innerText = "747/3";
            const ra6 = document.getElementById("ra6");
            ra6.innerText = "249";
            const a6 = document.getElementById("a6");
            a6.innerText = inputE.value;
            const p6 = document.getElementById("p6");
            p6.innerText = "0";
            if (inputE.value == 249) {
                count++;
                p6.innerText = "1";
            }
            lable1.innerHTML = "7. 43*15=?";
            inputE.value = "";
            break;

        case 7:
            const q7 = document.getElementById("q7");
            q7.innerText = "43*15";
            const ra7 = document.getElementById("ra7");
            ra7.innerText = "645";
            const a7 = document.getElementById("a7");
            a7.innerText = inputE.value;
            const p7 = document.getElementById("p7");
            p7.innerText = "0";
            if (inputE.value == 645) {
                count++;
                p7.innerText = "1";
            }
            lable1.innerHTML = "8. 903/3=?";
            inputE.value = "";
            break;

        case 8:
            const q8 = document.getElementById("q8");
            q8.innerText = "903/3";
            const ra8 = document.getElementById("ra8");
            ra8.innerText = "301";
            const a8 = document.getElementById("a8");
            a8.innerText = inputE.value;
            const p8 = document.getElementById("p8");
            p8.innerText = "0";
            if (inputE.value == 301) {
                count++;
                p8.innerText = "1";
            }
            lable1.innerHTML = "9. 945-423=?";
            inputE.value = "";
            break;


        case 9:
            const q9 = document.getElementById("q9");
            q9.innerText = "945-423";
            const ra9 = document.getElementById("ra9");
            ra9.innerText = "522";
            const a9 = document.getElementById("a9");
            a9.innerText = inputE.value;
            const p9 = document.getElementById("p9");
            p9.innerText = "0";
            if (inputE.value == 522) {
                count++;
                p9.innerText = "1";
            }
            lable1.innerHTML = "10. 207*4=?";
            inputE.value = "";
            break;

        case 10:
            const q10 = document.getElementById("q10");
            q10.innerText = "207*4";
            const ra10 = document.getElementById("ra10");
            ra10.innerText = "828";
            const a10 = document.getElementById("a10");
            a10.innerText = inputE.value;
            const p10 = document.getElementById("p10");
            p10.innerText = "0";
            if (inputE.value == 828) {
                count++;
                p10.innerText = "1";
            }
            alert("you have reached " + count + " points");
            const table = document.getElementById("table");
            table.style.display = "block";
            onclicks = 0;
            break;

        default:
            break;
    }

    console.log(count);
    localStorage.setItem("scoreH", count);

}



const selection = () => {
    const value = document.getElementById("level").value;
    console.log(value);

    const input = document.getElementById("answer");
    input.style.display = "block";

    const submit = document.getElementById("button");
    submit.style.display = "block";

    const table = document.getElementById("table");
    table.style.display = "none";

    if (value === "easy") {
        const h2 = document.getElementById("h2");
        h2.innerText = "Level Easy";

        lable1.innerText = "1. 3+5=?";

        submit.onclick = null;
        submit.onclick = submitEasy;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Easy";

    }


    else if (value === "medium") {

        const h2 = document.getElementById("h2");
        h2.innerText = "Level Medium";

        lable1.innerText = "1. 14+64=?";

        submit.onclick = submitMedium;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Medium";

    }
    else if (value === "hard") {

        const h2 = document.getElementById("h2");
        h2.innerText = "Level Hard";

        lable1.innerText = "1. 351+552=?";

        submit.onclick = submitHard;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Hard";

    }

}

