function calcular() {
    let valor = document.getElementById('valor').value; // Pega valor digitado no input
    console.log(valor)
    if(valor>10 || valor<1) {
        return alert("Valor inválido")
    }
    let res = document.getElementById("resultado"); // Pega div (onde deve inserir resultado)
    // let vfinal = valor.value; // Pega o valor pra poder fazer a operação matemática
    res.innerHTML = "Resultado aqui <br/>";
    for (let y = 1; y <= 10; y++) {
      let multiplicacao = valor * y;
      //document.write( y + ' x ' +valor.value+ ' = ' + (y * valor.value) + '<br>')
  
      res.innerHTML += `${valor} x ${y} = ${multiplicacao} <br/>`; //
    }
    
    if (valor == 1) {
        res.style.color = 'white';
        res.style.backgroundColor = 'cornflowerblue';
      } else if (valor == 2) {
        res.style.backgroundColor = 'yellow';
      } else if (valor == 3) {
        res.style.backgroundColor = 'green';
      } else if (valor == 4) {
        res.style.backgroundColor = 'blue';
      } else if (valor == 5) {
        res.style.backgroundColor = 'purple';
      } else if (valor == 6) {
        res.style.backgroundColor = 'black';
      } else if (valor == 7) {
        res.style.backgroundColor = 'cyan';
      } else if (valor == 8) {
        res.style.backgroundColor = 'pink';
      } else if (valor == 9) {
        res.style.backgroundColor = 'orange';
      } else {
        res.style.backgroundColor = 'blue';
      }
    }
  