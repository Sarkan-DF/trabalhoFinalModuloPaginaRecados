let data = JSON.parse(localStorage.getItem('usuarios')) || [];
console.log(data);

const formularioHTML = document.getElementById("formCriaConta");

formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const userName = document.getElementById('userName1').value;
    const userPassword = document.getElementById('password1').value;
    const userRepeatPassword = document.getElementById('repeatPassword1').value;

    console.log(userName)
    console.log(userPassword)
    console.log(userRepeatPassword)

    const usuarioExistente = data.some((usuario) => usuario.userName === userName);
    if (usuarioExistente) {
        alert("Usuaria já cadastrado!");
        return;
    }

    if (userPassword != userRepeatPassword) {
        alert("A senhas devem ser iguais!");
        return;
    }

    if (userName === "") {
        alert("User name tem que ser preenchido!");
        return;
    }

    const loginUser = {
        userName: userName,
        userPassword: userPassword
    }

    data.push(loginUser)
    
    localStorage.setItem('usuarios', JSON.stringify(data));
    alert("Usuario cadastrado com sucesso!\nVocê será redirecionado para a tela de login!")
    window.location.href = './paginaEntrarSistema.html'
});