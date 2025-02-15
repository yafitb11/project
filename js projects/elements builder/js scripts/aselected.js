

let aID = 30;
let aIdList = [];

const selectedA = () => {
    cerateAForm();
    createRemoveA()
}

const side = document.getElementById("side");

//create a form...
const cerateAForm = () => {
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

    const removeFormBtn = document.createElement("button");
    removeFormBtn.innerText = "remove a form";
    form.appendChild(removeFormBtn);
    removeFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        side.removeChild(form);
        const side2 = document.getElementById("side2");
        side2.style.height = "400px";
        const chooseE = document.getElementById("element");
        chooseE.value = "";
    })
}


//create and remove a.....
const createRemoveA = () => {
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
        aIdList.push(a.id);
        localStorage.setItem('a-Id-list', JSON.stringify(aIdList));
        form.elements[1].value = "";
        form.elements[2].value = "";

        if (aID === 31) {
            const removeElementsButtonsDiv = document.getElementById("removeElementsButtonsDiv");
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "remove a";
            removeBtn.style.backgroundColor = "lightgreen";
            removeElementsButtonsDiv.appendChild(removeBtn);

            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const removedA = document.getElementById(aID);
                platform.removeChild(removedA);
                aIdList = aIdList.filter((id) => { return id != aID });
                localStorage.setItem('a-Id-list', JSON.stringify(aIdList));
                aID--;
                if (aID == 30) {
                    removeElementsButtonsDiv.removeChild(removeBtn);
                }
            })
        }


    })

}

export { selectedA };