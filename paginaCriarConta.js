let allUser = JSON.parse(localStorage.getItem('allUser')) || [];

const userName = document.getElementById('userName1');
const userPassword = document.getElementById('password1');
const userRepeatPassword = document.getElementById('repeatPassword1');

function registerUser() {
    const checkUser = allUser.some((valor) => userName.value === valor.userName);
    if (checkUser) {
        return alert("Usuario já cadastrado!");
    };

    if (userName.value === "" || userPassword.value === "" || userRepeatPassword.value === "") {
        return alert("Todos os campos tem que ser prencidos!")
    }

    if (userPassword.value != userRepeatPassword.value) {
        return alert("A senhas devem ser iguais!")
    };
    
    const newUser = {
        userName: userName.value,
        userPassword: userPassword.value,
        logged: false,
        recados: []
    };
    allUser.push(newUser);
    saveOnStorege();
    window.location.href = "paginaEntrarSistema.html";
};

function saveOnStorege() {
    localStorage.setItem("allUser", JSON.stringify(allUser));
};