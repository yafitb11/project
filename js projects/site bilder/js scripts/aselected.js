
let removeBtnCounta = 0;
let removeFormBtnCounta = 0;
let aID = 30;
let aIdList = [];

const selectedA = () => {
    cerateAForm();
    createRemoveA()
}

//create a form...
const cerateAForm = () => {
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

export { selectedA };