const getStorage = JSON.parse(localStorage.getItem("contatos")) || [{ id: 99, userName: "", telefone: "" },];

console.log(getStorage);

function criaConta() {
    
}