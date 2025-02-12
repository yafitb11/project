
let removeBtnCountbtn = 0;
let removeFormBtnCountbtn = 0;
let buttonID = 40;
let buttonIdList = [];

const selectedButton = () => {
    cerateButtonForm();
    createRemoveButton()
}

const side = document.getElementById("side");

//create button form...
const cerateButtonForm = () => {

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

    const removeFormBtn = document.createElement("button");
    removeFormBtn.innerText = "remove button form";
    form.appendChild(removeFormBtn);
    removeFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        side.removeChild(form);
        const side2 = document.getElementById("side2");
        side2.style.height = "500px";
        const chooseE = document.getElementById("element");
        chooseE.value = "";
    })
}


//create and remove button.....
const createRemoveButton = () => {
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
        buttonIdList.push(button.id);
        localStorage.setItem('button-Id-list', JSON.stringify(buttonIdList));
        form.elements[1].value = "";
        form.elements[2].value = "";
        form.elements[3].value = "";
        form.elements[4].value = "";
        form.elements[5].value = "";
        form.elements[6].value = "";
        form.elements[7].value = "";

        if (buttonID === 41) {
            const removeElementsButtonsDiv = document.getElementById("removeElementsButtonsDiv");
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "remove button";
            removeBtn.style.backgroundColor = "lightblue";
            removeElementsButtonsDiv.appendChild(removeBtn);

            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const removedBTN = document.getElementById(buttonID);
                platform.removeChild(removedBTN);
                buttonIdList = buttonIdList.filter((id) => { return id != buttonID });
                localStorage.setItem('button-Id-list', JSON.stringify(buttonIdList));
                buttonID--;
                if (buttonID == 40) {
                    removeElementsButtonsDiv.removeChild(removeBtn);
                }
            })
        }


    })

}

export { selectedButton };