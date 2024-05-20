function criarLogin() {
    var usu = document.getElementById("user").value
    var sen = document.getElementById("pass").value

    localStorage.setItem("user", usu)
    localStorage.setItem("pass", sen)
}

function fazerLogin() {
    var usu = document.getElementById("user").value
    var sen = document.getElementById("pass").value
    
    var usu2 = localStorage.getItem("user")
    var sen2 = localStorage.getItem("pass")
    if (usu2 == usu && sen2 == sen) {
        alert("Login efetuado com sucesso!")
    }
    else {
        alert("Login incorreto.")
    }
}