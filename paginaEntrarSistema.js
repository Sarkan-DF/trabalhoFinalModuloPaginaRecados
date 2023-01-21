const allUser = JSON.parse(localStorage.getItem("allUser"));

const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");

function login() {
    const checkUser = allUser.find(
        (valor) =>
            valor.userName === userName.value && valor.userPassword === userPassword.value
    );

    if (checkUser) {
        checkUser.logged = true;
        sessionStorage.setItem("loggedUser", JSON.stringify(checkUser));
        alert("Usuario logado com sucesso!\nVocê será redirecionado para a tela de recados!");
        window.location.href = "paginaRecados.html";
    } else {
        return alert("Usuario ou senha incorreta");
    }
};