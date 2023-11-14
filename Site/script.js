function verificarProduto() {
  const nomeProduto = document.getElementById('produto').value.toLowerCase();
  const precoProduto = parseFloat(document.getElementById('preco').value);
  const imagemColar = document.getElementById('imagemColar');
  const resultado = document.getElementById('resultado');

  if (nomeProduto && !isNaN(precoProduto) && precoProduto > 0) {
    if (nomeProduto === 'necklace') {
      imagemColar.style.display = 'block';
      resultado.innerText = `O produto ${nomeProduto} está disponível para compra!`
  }
  } else {
    resultado.innerText = 'Por favor, insira um nome e um preço válido para o produto.';
    imagemColar.style.display = 'none';
  } 
}
