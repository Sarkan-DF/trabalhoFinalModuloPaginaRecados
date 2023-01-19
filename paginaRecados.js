let data = JSON.parse(localStorage.getItem('recados')) || [];
const tableEl = document.getElementById("listaRecados");

function salvaTabela() {
    const descricaoRecado = document.getElementById('descricao').value;
    const detalhamentoRecado = document.getElementById('detalhamento').value;

    const objRecado = {
        descricaoRecado: descricaoRecado,
        detalhamentoRecado: detalhamentoRecado
    };

    data.push(objRecado);
    renderTabela();
    saveOnStorage();
}

function saveOnStorage() {
    localStorage.setItem("recados", JSON.stringify(data));
}

function renderTabela() {
    tableEl.innerHTML = "";
    data.map((user, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const deleteButton = document.createElement("button");
        const EditButton = document.createElement("button");

        deleteButton.setAttribute("onClick", `deleteRecado(${index})`);
        EditButton.setAttribute("onClick", `editaRecado(${index})`);
        EditButton.setAttribute("class", "button");
        deleteButton.setAttribute("class", "button");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td4.appendChild(deleteButton);
        td4.appendChild(EditButton);

        td1.innerHTML = index + 1;
        td2.innerHTML = user.descricaoRecado;
        td3.innerHTML = user.detalhamentoRecado;
        deleteButton.innerHTML = "Delete";
        EditButton.innerHTML = "Edit";
        tableEl.appendChild(tr);
    });
}
renderTabela();

function deleteRecado(index) {
    data.splice(index, 1);
    renderTabela();
    saveOnStorage();
}

function editaRecado(index) {
    const descricaoRecado = prompt("Digite a nova descrição: ");
    const detalhamentoRecado = prompt("Digite a nova descrição: ");

    data[index].descricaoRecado = descricaoRecado;
    data[index].detalhamentoRecado = detalhamentoRecado;
    renderTabela();
    saveOnStorage();
}