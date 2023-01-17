let useLogeer = JSON.parse(localStorage.getItem('usuarios'))
//console.log(useLogeer);

const formularioHTML = document.getElementById('formEntraSistema');

formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const userNameEntra = document.getElementById('userName2').value;
    const userPasswordEntra = document.getElementById('password2').value;

    const usuarioEncontrado = useLogeer.some((usuario) => usuario.userName === userNameEntra && usuario.userPassword === userPasswordEntra);

    if (usuarioEncontrado) {
        window.location.href = './paginaRecados.html'

    } else{
        alert("Usuario e senha errado!");
        return;
    }
});