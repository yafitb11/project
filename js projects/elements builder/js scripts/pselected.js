

let pID = 20;
let pIdList = [];



const selectedP = () => {
    ceratePForm();
    createRemoveP()
}

const side = document.getElementById("side");

//create p form...
const ceratePForm = () => {

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


    const removeFormBtn = document.createElement("button");
    removeFormBtn.innerText = "remove p form";
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


//create and remove p.....
const createRemoveP = () => {

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
        pIdList.push(p.id);
        localStorage.setItem('p-Id-list', JSON.stringify(pIdList));

        form.elements[1].value = "";
        form.elements[2].value = "";
        form.elements[3].value = "";


        if (pID === 21) {
            const removeElementsButtonsDiv = document.getElementById("removeElementsButtonsDiv");
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "remove p";
            removeBtn.style.backgroundColor = "yellow";
            removeElementsButtonsDiv.appendChild(removeBtn);

            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const removedP = document.getElementById(pID);
                platform.removeChild(removedP);
                pIdList = pIdList.filter((id) => { return id != pID });
                localStorage.setItem('p-Id-list', JSON.stringify(pIdList));
                pID--;
                if (pID == 20) {
                    removeElementsButtonsDiv.removeChild(removeBtn);
                }
            })
        }

    })
}



export { selectedP };