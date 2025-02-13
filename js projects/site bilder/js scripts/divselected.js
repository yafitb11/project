

let divID = 0;
let divIdList = [];

const selecteddiv = () => {
    cerateDivForm();
    createRemoveDiv();
}

const side = document.getElementById("side");

//create H1 form...
const cerateH1Form = () => {

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

    const removeFormBtn = document.createElement("button");
    removeFormBtn.innerText = "remove h1 form";
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


//create and remove H1.....
const createRemoveH1 = () => {
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

        if (h1ID === 11) {
            const removeElementsButtonsDiv = document.getElementById("removeElementsButtonsDiv");
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "remove h1";
            removeBtn.style.backgroundColor = "blueviolet";
            removeElementsButtonsDiv.appendChild(removeBtn);

            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const removedH1 = document.getElementById(h1ID);
                platform.removeChild(removedH1);
                h1IdList = h1IdList.filter((id) => { return id != h1ID });
                localStorage.setItem('h1-Id-list', JSON.stringify(h1IdList));
                h1ID--;
                if (h1ID == 10) {
                    removeElementsButtonsDiv.removeChild(removeBtn);
                }
            })
        }

    })
}



export { selectedDiv };


/*
const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsDiv";
    form.appendChild(buttonsDiv);
    */