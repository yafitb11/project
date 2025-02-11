//page..........

const changePageColor = () => {
    const color = document.getElementById("bgc");
    document.body.style.backgroundColor = color.value;
    color.value = "";

}


let removeBtnCounth1 = 0;
let removeBtnCountp = 0;
let removeBtnCounta = 0;
let removeBtnCountbtn = 0;
let removeFormBtnCounth1 = 0;
let removeFormBtnCountp = 0;
let removeFormBtnCounta = 0;
let removeFormBtnCountbtn = 0;
let h1ID = 10;
let pID = 20;
let aID = 30;
let buttonID = 40;
let divIdList = [];
let h1IdList = [];
let pIdList = [];
let aIdList = [];
let buttonIdList = [];

//....select....
const chooseE = document.getElementById("element");
chooseE.addEventListener('change', (e) => {
    // div selected
    if (chooseE.value === "div") {
        const divP = document.getElementById("divProperties");
        divP.style.display = "block";
    }
    // h1 selected
    else if (chooseE.value === "h1") {
        const side = document.getElementById("side");
        const form = document.createElement("form");
        side.appendChild(form);
        const fieldset = document.createElement("fieldset");
        form.appendChild(fieldset);
        const legend = document.createElement('legend');
        legend.textContent = 'h1 properties';
        fieldset.appendChild(legend);
        const labelt = document.createElement("label");
        labelt.innerText = "h1 text";
        fieldset.appendChild(labelt);
        const inputt = document.createElement("input");
        inputt.type = "text";
        fieldset.appendChild(inputt);


        const br1 = document.createElement("br");
        fieldset.appendChild(br1);

        const labelc = document.createElement("label");
        labelc.innerText = "h1 text color";
        fieldset.appendChild(labelc);
        const inputc = document.createElement("input");
        inputc.type = "text";
        fieldset.appendChild(inputc);

        const br2 = document.createElement("br");
        fieldset.appendChild(br2);

        const labels = document.createElement("label");
        labels.innerText = "h1 text size";
        fieldset.appendChild(labels);
        const inputs = document.createElement("input");
        inputs.type = "number";
        inputs.min = 1;
        fieldset.appendChild(inputs);

        const inputsub = document.createElement("input");
        inputsub.type = "submit";
        inputsub.id = "createH1";
        fieldset.appendChild(inputsub);

        /////create  and remove h1

        const createH1 = document.querySelector("#createH1");
        createH1.addEventListener('click', (e) => {
            e.preventDefault();

            const form = e.target.closest('form');
            const h1 = document.createElement("h1");
            h1.innerText = form.elements[1].value;
            h1.style.color = form.elements[2].value;
            h1.style.fontSize = `${form.elements[3].value}px`;
            h1ID++;
            h1.id = h1ID;
            const platform = document.getElementById("creationPlatform");
            platform.appendChild(h1);

            h1IdList.push(h1.id);
            localStorage.setItem('h1-Id-list', JSON.stringify(h1IdList));

            form.elements[1].value = "";
            form.elements[2].value = "";
            form.elements[3].value = "";

            if (removeBtnCounth1 === 0) {
                const removeBtn = document.createElement("button");
                removeBtn.innerText = "remove h1";
                form.appendChild(removeBtn);
                removeBtnCounth1++;

                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const removedH1 = document.getElementById(h1ID);
                    platform.removeChild(removedH1);
                    h1IdList = h1IdList.filter((id) => { return id != h1ID });
                    localStorage.setItem('h1-Id-list', JSON.stringify(h1IdList));
                    h1ID--;
                })
            }

            if (removeFormBtnCounth1 === 0) {
                const removeFormBtn = document.createElement("button");
                removeFormBtn.innerText = "remove h1 form";
                form.appendChild(removeFormBtn);
                removeFormBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    side.removeChild(form);
                })
                removeFormBtnCounth1++;
            }


        })

    }


    // p selected
    else if (chooseE.value === "p") {
        const side = document.getElementById("side");
        const form = document.createElement("form");
        side.appendChild(form);
        const fieldset = document.createElement("fieldset");
        form.appendChild(fieldset);
        const legend = document.createElement('legend');
        legend.textContent = 'p properties';
        fieldset.appendChild(legend);
        const labelt = document.createElement("label");
        labelt.innerText = "p text";
        fieldset.appendChild(labelt);
        const inputt = document.createElement("input");
        inputt.type = "text";
        fieldset.appendChild(inputt);

        const br1 = document.createElement("br");
        fieldset.appendChild(br1);

        const labelc = document.createElement("label");
        labelc.innerText = "p text color";
        fieldset.appendChild(labelc);
        const inputc = document.createElement("input");
        inputc.type = "text";
        fieldset.appendChild(inputc);

        const br2 = document.createElement("br");
        fieldset.appendChild(br2);

        const labels = document.createElement("label");
        labels.innerText = "p text size";
        fieldset.appendChild(labels);
        const inputs = document.createElement("input");
        inputs.type = "number";
        inputs.min = 1;
        fieldset.appendChild(inputs);

        const inputsub = document.createElement("input");
        inputsub.type = "submit";
        inputsub.id = "createP";
        fieldset.appendChild(inputsub);

        /////create and remove p

        const createP = document.querySelector("#createP");
        createP.addEventListener('click', (e) => {
            e.preventDefault();

            const form = e.target.closest('form');
            const p = document.createElement("p");
            p.innerText = form.elements[1].value;
            p.style.color = form.elements[2].value;
            p.style.fontSize = `${form.elements[3].value}px`;
            pID++;
            p.id = pID;
            const platform = document.getElementById("creationPlatform");
            platform.appendChild(p);
            form.elements[1].value = "";
            form.elements[2].value = "";
            form.elements[3].value = "";


            if (removeBtnCountp === 0) {
                const removeBtn = document.createElement("button");
                removeBtn.innerText = "remove p";
                form.appendChild(removeBtn);
                removeBtnCountp++;

                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const removedP = document.getElementById(pID);
                    platform.removeChild(removedP);
                    pID--;
                })
            } else { }

            const removeFormBtn = document.createElement("button");
            removeFormBtn.innerText = "remove p form";
            form.appendChild(removeFormBtn);
            removeFormBtn.addEventListener('click', (e) => {
                e.preventDefault();
                side.removeChild(form);
            })

        })
    }

    // a selected
    else if (chooseE.value === "a") {
        const side = document.getElementById("side");
        const form = document.createElement("form");
        side.appendChild(form);
        const fieldset = document.createElement("fieldset");
        form.appendChild(fieldset);
        const legend = document.createElement('legend');
        legend.textContent = 'a properties';
        fieldset.appendChild(legend);
        const labelt = document.createElement("label");
        labelt.innerText = "link text";
        fieldset.appendChild(labelt);
        const inputt = document.createElement("input");
        inputt.type = "text";
        fieldset.appendChild(inputt);

        const br1 = document.createElement("br");
        fieldset.appendChild(br1);

        const labelhref = document.createElement("label");
        labelhref.innerText = "link address";
        fieldset.appendChild(labelhref);
        const inputhref = document.createElement("input");
        inputhref.type = "text";
        fieldset.appendChild(inputhref);

        const inputsub = document.createElement("input");
        inputsub.type = "submit";
        inputsub.id = "createA";
        fieldset.appendChild(inputsub);

        /////create and remove a

        const createA = document.querySelector("#createA");
        createA.addEventListener('click', (e) => {
            e.preventDefault();

            const form = e.target.closest('form');
            const a = document.createElement("a");
            a.innerText = form.elements[1].value;
            a.href = form.elements[2].value;
            a.target = "_blank";
            aID++;
            a.id = aID;
            const platform = document.getElementById("creationPlatform");
            platform.appendChild(a);
            form.elements[1].value = "";
            form.elements[2].value = "";

            if (removeBtnCounta === 0) {
                const removeBtn = document.createElement("button");
                removeBtn.innerText = "remove a";
                form.appendChild(removeBtn);
                removeBtnCounta++;

                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const removedA = document.getElementById(aID);
                    platform.removeChild(removedA);
                    aID--;
                })
            } else { }

            const removeFormBtn = document.createElement("button");
            removeFormBtn.innerText = "remove a form";
            form.appendChild(removeFormBtn);
            removeFormBtn.addEventListener('click', (e) => {
                e.preventDefault();
                side.removeChild(form);
            })

        })

    }

    //button selected

    else if (chooseE.value === "button") {
        const side = document.getElementById("side");
        const form = document.createElement("form");
        side.appendChild(form);
        const fieldset = document.createElement("fieldset");
        form.appendChild(fieldset);
        const legend = document.createElement('legend');
        legend.textContent = 'button properties';
        fieldset.appendChild(legend);
        const labelt = document.createElement("label");
        labelt.innerText = "button text";
        fieldset.appendChild(labelt);
        const inputt = document.createElement("input");
        inputt.type = "text";
        fieldset.appendChild(inputt);

        const br1 = document.createElement("br");
        fieldset.appendChild(br1);

        const labelc = document.createElement("label");
        labelc.innerText = "button text color";
        fieldset.appendChild(labelc);
        const inputc = document.createElement("input");
        inputc.type = "text";
        fieldset.appendChild(inputc);

        const br2 = document.createElement("br");
        fieldset.appendChild(br2);

        const labels = document.createElement("label");
        labels.innerText = "button text size in px";
        fieldset.appendChild(labels);
        const inputs = document.createElement("input");
        inputs.type = "number";
        inputs.min = 1;
        fieldset.appendChild(inputs);


        const br3 = document.createElement("br");
        fieldset.appendChild(br3);

        const labelbgc = document.createElement("label");
        labelbgc.innerText = "button background color";
        fieldset.appendChild(labelbgc);
        const inputbgc = document.createElement("input");
        inputbgc.type = "text";
        fieldset.appendChild(inputbgc);

        const br4 = document.createElement("br");
        fieldset.appendChild(br4);

        const labelw = document.createElement("label");
        labelw.innerText = "button width in px";
        fieldset.appendChild(labelw);
        const inputw = document.createElement("input");
        inputw.type = "number";
        inputw.min = 1;
        fieldset.appendChild(inputw);

        const br5 = document.createElement("br");
        fieldset.appendChild(br5);

        const labelh = document.createElement("label");
        labelh.innerText = "button height in px";
        fieldset.appendChild(labelh);
        const inputh = document.createElement("input");
        inputh.type = "number";
        inputh.min = 1;
        fieldset.appendChild(inputh);

        const br6 = document.createElement("br");
        fieldset.appendChild(br6);

        const labelbr = document.createElement("label");
        labelbr.innerText = "button border-radius in px";
        fieldset.appendChild(labelbr);
        const inputbr = document.createElement("input");
        inputbr.type = "number";
        inputbr.min = 0;
        fieldset.appendChild(inputbr);

        const inputsub = document.createElement("input");
        inputsub.type = "submit";
        inputsub.id = "createB";
        fieldset.appendChild(inputsub);

        /////create and remove button

        const createB = document.querySelector("#createB");
        createB.addEventListener('click', (e) => {
            e.preventDefault();

            const form = e.target.closest('form');
            const button = document.createElement("button");
            button.innerText = form.elements[1].value;
            button.style.color = form.elements[2].value;
            button.style.fontSize = `${form.elements[3].value}px`;
            button.style.backgroundColor = form.elements[4].value;
            button.style.width = `${form.elements[5].value}px`;
            button.style.height = `${form.elements[6].value}px`;
            button.style.borderRadius = `${form.elements[7].value}px`;
            buttonID++;
            button.id = buttonID;
            const platform = document.getElementById("creationPlatform");
            platform.appendChild(button);
            form.elements[1].value = "";
            form.elements[2].value = "";
            form.elements[3].value = "";
            form.elements[4].value = "";
            form.elements[5].value = "";
            form.elements[6].value = "";
            form.elements[7].value = "";

            if (removeBtnCountbtn === 0) {
                const removeBtn = document.createElement("button");
                removeBtn.innerText = "remove button";
                form.appendChild(removeBtn);
                removeBtnCountbtn++;

                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const removedBTN = document.getElementById(buttonID);
                    platform.removeChild(removedBTN);
                    buttonID--;
                })
            } else { }

            const removeFormBtn = document.createElement("button");
            removeFormBtn.innerText = "remove button form";
            form.appendChild(removeFormBtn);
            removeFormBtn.addEventListener('click', (e) => {
                e.preventDefault();
                side.removeChild(form);
            })


        })

    }

    const side2 = document.getElementById("side2");
    side2.style.height = "300px";

})




//div...........
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
    divIdNum--;

}

//hide div form

const hideDivForm = () => {
    const divP = document.getElementById("divProperties");
    divP.style.display = "none";
}