var button, quebra_linha, jogada = 1, vencedor = 0;
var tabuleiro = new Array(3);
for (var i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(3);
}
for (var i = 0; i < tabuleiro.length; i++) {
    quebra_linha = document.createElement("br");
    document.body.append(quebra_linha);
    for (var j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "bt" + i + "" + j);
        button.setAttribute("class", "btJogo" + i);
        button.setAttribute("onclick", "marca(" + i + ',' + j + ')');
        button.append(document.createTextNode(""));
        document.body.append(button);
    }
}

function marcaCasa(nomeBotao) {
    var btn = document.getElementById(nomeBotao);
    if (jogada % 2 == 0) {
        btn.innerText = "O";
        btn.style.color = "red";
    } else {
        btn.innerText = "X";
        btn.style.color = "black";
    }
    btn.disabled = true;
    jogada++;
    if (jogada >= 5) {
        encerrarjogo();
    }
    if (jogada > 9) {
        alert("Deu velha D:");
    }
}

function marca(linha, coluna) {
    marcaCasa("bt" + linha + "" + coluna);
}

function verificarLinhasColunas() {
    for (var i = 0; i < 3; i++) {
        if (document.getElementById("bt" + i + "0").innerText == document.getElementById("bt" + i + "1").innerText &&
            document.getElementById("bt" + i + "1").innerText == document.getElementById("bt" + i + "2").innerText &&
            document.getElementById("bt" + i + "0").innerText != "") {
            alert("Jogo finalizado!\nVencedor: " + document.getElementById("bt" + i + "0").innerText);
            vencedor++;
            return true;
        }
        if (document.getElementById("bt0" + i).innerText == document.getElementById("bt1" + i).innerText &&
            document.getElementById("bt1" + i).innerText == document.getElementById("bt2" + i).innerText &&
            document.getElementById("bt0" + i).innerText != "") {
            alert("Jogo finalizado!\nVencedor: " + document.getElementById("bt0" + i).innerText);
            vencedor++;
            return true;
        }
    }
    return false;
}

function verificarDiagonais() {
    if (document.getElementById("bt00").innerText == document.getElementById("bt11").innerText &&
        document.getElementById("bt11").innerText == document.getElementById("bt22").innerText &&
        document.getElementById("bt00").innerText != "") {
        alert("Jogo finalizado!\nVencedor: " + document.getElementById("bt00").innerText);
        vencedor++;
        return true;
    }
    if (document.getElementById("bt02").innerText == document.getElementById("bt11").innerText &&
        document.getElementById("bt11").innerText == document.getElementById("bt20").innerText &&
        document.getElementById("bt02").innerText != "") {
        alert("Jogo finalizado!\nVencedor: " + document.getElementById("bt02").innerText);
        vencedor++;
        return true;
    }
    return false;
}

function encerrarjogo() {
    if (verificarLinhasColunas() || verificarDiagonais()) {
        return;
    }
}