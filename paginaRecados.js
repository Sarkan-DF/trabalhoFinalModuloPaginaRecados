const table = document.getElementById("listaRecados");
const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
const allUser = JSON.parse(localStorage.getItem("allUser"));

function recados() {
    const descricaoRecado = document.getElementById('descricao');
    const detalhamentoRecado = document.getElementById('detalhamento');

    const objRecado = {
        descricaoRecado: descricaoRecado.value,
        detalhamentoRecado: detalhamentoRecado.value
    };
    loggedUser.recados.push(objRecado);

    renderTabela();
    saveOnStorage();
};

function checkLogged() {
    if (!loggedUser?.logged || !loggedUser) {
        alert("Usuario nao credenciado!\nVocê será redirecionado para a tela de login!");
        return (window.location.href = "paginaEntrarSistema.html");
    }
};

function saveOnStorage() {
    sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    let indexUser = allUser.findIndex((user, index, array) => user.userName === loggedUser.userName);

    allUser[indexUser] = loggedUser;

    localStorage.setItem("allUser", JSON.stringify(allUser));
};

function renderTabela() {
    table.innerHTML = "";
    loggedUser.recados.map((user, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");

        deleteButton.setAttribute("onClick", `deleteRecado(${index})`);
        editButton.setAttribute("onClick", `editaRecado(${index})`);
        editButton.setAttribute("class", "button");
        deleteButton.setAttribute("class", "button");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td4.appendChild(deleteButton);
        td4.appendChild(editButton);

        td1.innerHTML = index + 1;
        td2.innerHTML = user.descricaoRecado;
        td3.innerHTML = user.detalhamentoRecado;
        deleteButton.innerHTML = "Delete";
        editButton.innerHTML = "Edit";
        table.appendChild(tr);
    });
};

function deleteRecado(index) {
    loggedUser.recados.splice(index, 1);
    renderTabela();
    saveOnStorage();
};

function editaRecado(index) {
    const descricaoRecado = prompt("Digite a nova descrição: ");
    const detalhamentoRecado = prompt("Digite o novo detalhamento: ");

    loggedUser.recados[index].descricaoRecado = descricaoRecado;
    loggedUser.recados[index].detalhamentoRecado = detalhamentoRecado;
    renderTabela();
    saveOnStorage();
};

function logout() {
    sessionStorage.removeItem("loggedUser");
    alert("Usuario desconectado do sistema com sucesso!");
    window.location.href = "paginaEntrarSistema.html"
};

function mostraUsuario() {
    window.onload = function () {
        let usuario = loggedUser.userName;
        document.getElementById('usuario').innerHTML = (`Usuario logado: ${usuario}`);
    };
};

mostraUsuario();
checkLogged();
renderTabela();