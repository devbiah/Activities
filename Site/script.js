function verificarProduto() {
    const nomeProduto = document.getElementById('produto').value;
    const precoProduto = parseFloat(document.getElementById('preco').value);
  
    if (nomeProduto && !isNaN(precoProduto) && precoProduto > 0) {
      if (precoProduto < 10) {
        document.getElementById('resultado').innerText = `O produto ${nomeProduto} está disponível para compra!`;
      } else {
        document.getElementById('resultado').innerText = `O produto ${nomeProduto} é um item premium, verifique outras opções!`;
      }
    } else {
      document.getElementById('resultado').innerText = 'Por favor, insira um nome e um preço válido para o produto.';
    }
  }
  