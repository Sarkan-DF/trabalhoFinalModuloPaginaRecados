let data = [];

document.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const userName = document.getElementById('userName1').value;
    const userPassword = document.getElementById('password1').value;
    const userRepeatPassword = document.getElementById('repeatPassword1').value;

    console.log(userName)

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