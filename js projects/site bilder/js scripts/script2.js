import { selectedH1 } from "./h1selected.js";
import { selectedP } from "./pselected.js";
import { selectedA } from "./aselected.js";
import { selectedButton } from "./buttonselected.js";


//page..........
const changePageColor = () => {
    const color = document.getElementById("bgc");
    document.body.style.backgroundColor = color.value;
    color.value = "";
}
document.getElementById('submitPage').addEventListener('click', changePageColor);

const pageDiv = document.getElementById("page");
const pageBackDiv = document.getElementById("pageBack");
const hidePageForm = () => {
    pageDiv.style.display = "none";
    const pageBackBtn = document.createElement("button");
    pageBackBtn.innerText = "show page color form";
    pageBackBtn.id = "returnPage";
    pageBackBtn.addEventListener('click', (e) => {
        pageDiv.style.display = "flex";
        pageBackDiv.removeChild(pageBackBtn);
    })

    pageBackDiv.appendChild(pageBackBtn);
}
document.getElementById("hidePage").addEventListener('click', hidePageForm);



//select.....
const chooseE = document.getElementById("element");
chooseE.addEventListener('change', (e) => {

    if (chooseE.value === "div") {
        const divP = document.getElementById("divProperties");
        divP.style.display = "block";
    }

    else if (chooseE.value === "h1") {
        selectedH1();
    }
    else if (chooseE.value === "p") {
        selectedP();
    }

    else if (chooseE.value === "a") {
        selectedA();
    }
    else if (chooseE.value === "button") {
        selectedButton();
    }

    const side2 = document.getElementById("side2");
    side2.style.height = "300px";

})





//div.................
let divIdList = [];
let divIdNum = 0;

const cDivBtn = document.getElementById("cDiv");
cDivBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newDiv = document.createElement("div");
    const bgc = document.getElementById("divBGC").value;
    newDiv.style.backgroundColor = bgc;
    const width = `${document.getElementById("divW").value}px`;
    newDiv.style.width = width;
    const height = `${document.getElementById("divH").value}px`;
    newDiv.style.height = height;
    const divBR = `${document.getElementById("divBR").value}px`;
    newDiv.style.borderRadius = divBR;
    divIdNum++;
    newDiv.id = divIdNum;
    newDiv.innerText = `div N. ${divIdNum}`;

    const platform = document.getElementById("creationPlatform");
    platform.appendChild(newDiv);

    document.getElementById("divBGC").value = "";
    document.getElementById("divW").value = "";
    document.getElementById("divH").value = "";
    document.getElementById("divBR").value = "";

})

//div border...........

const addDivBorder = () => {
    const border = document.querySelector("#divForm>#border");
    border.style.display = "block";
}
document.getElementById('addDivBorderBtn').addEventListener('click', addDivBorder);

const cBorder = document.getElementById("cBorder");
cBorder.addEventListener('click', (e) => {
    e.preventDefault();
    const div1 = document.getElementById(divIdNum);
    const bcolor = document.getElementById("bcolor").value;
    div1.style.borderColor = bcolor;
    const bwidth = `${document.getElementById("bwidth").value}px`;
    div1.style.borderWidth = bwidth;
    const bstyle = document.getElementById("bstyle").value;
    div1.style.borderStyle = bstyle;

    document.getElementById("bcolor").value = "";
    document.getElementById("bwidth").value = "";
    document.getElementById("bstyle").value = "";

})

//div content.........

const addDivContent = () => {
    const content = document.querySelector("#divForm>#content");
    content.style.display = "block";
}
document.getElementById('addDivContentBtn').addEventListener('click', addDivContent);

const cContent = document.getElementById("cContent");
cContent.addEventListener('click', (e) => {
    e.preventDefault();
    const div1 = document.getElementById(divIdNum);
    const p = document.createElement("p");
    div1.appendChild(p);

    const dcontent = document.getElementById("dcontent");
    p.innerHTML = dcontent.value;
    const ccolor = document.getElementById("ccolor");
    p.style.color = ccolor.value;
    const csize = document.getElementById("csize");
    p.style.fontSize = `${csize}px`;
    p.style.margin = "auto";
    p.style.textAlign = "center";
    p.style.marginTop = "7px";

    dcontent.value = "";
    ccolor.value = "";
    csize.value = "";

})

//remove div...........

const removeDiv = () => {
    const platform = document.getElementById("creationPlatform");
    const div1 = document.getElementById(divIdNum);
    platform.removeChild(div1);
    divIdList = divIdList.filter((id) => { return id != divID });
    localStorage.setItem('div-Id-list', JSON.stringify(divIdList));
    divIdNum--;
    if (divID == 0) {
        removeElementsButtonsDiv.removeChild(removeBtn);
    }
}
document.getElementById('removeDivBtn').addEventListener('click', removeDiv);

//hide div form

const hideDivForm = () => {
    const divP = document.getElementById("divProperties");
    divP.style.display = "none";
    const side2 = document.getElementById("side2");
    side2.style.height = "500px";
    chooseE.value = "";
}
document.getElementById('hideDivFormBtn').addEventListener('click', hideDivForm);