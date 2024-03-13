let carrinho = [];

function verificarProduto() {
  const nomeProduto = document.getElementById("produto").value.toLowerCase();
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const imagemColar = document.getElementById("imagemColar");
  const resultado = document.getElementById("resultado");
  const botaoLoja = document.getElementById("irParaLoja");
  const botaoAdicionar = document.getElementById("botao");

  if (nomeProduto === "colar") {
    const precoColar = 55;

    imagemColar.style.display = "block";
    botaoAdicionar.style.display = "block";
    resultado.innerText = `O produto ${nomeProduto} está disponível para compra!`;
    botaoLoja.style.display = "block"; 

    botaoAdicionar.addEventListener("click", () => {
      adicionarAoCarrinho(precoColar, quantidade);
    });

    botaoLoja.addEventListener("click", () => {
      window.location.href = "https://store.billieeilish.com/products/blohsh-pendant-jeweled-sterling-silver-necklace?_pos=4&_sid=460f32124&_ss=r";
    });
  } else {
    resultado.innerText = 'Por favor, insira um nome válido para o produto. O único produto disponível é o "Colar".';
    imagemColar.style.display = "none";
    botaoAdicionar.style.display = "none";
    botaoLoja.style.display = "none"; 
  }
}

function adicionarAoCarrinho(preco, quantidade) {
  const item = {
    nome: "Colar",
    preco: preco,
    quantidade: quantidade,
  };
  carrinho.push(item);

  const totalCompra = preco * quantidade;
  alert(`O produto foi adicionado ao carrinho!\n\nValor do Colar: R$${preco.toFixed(2)}\nQuantidade: ${quantidade}\nTotal da Compra: R$${totalCompra.toFixed(2)}`);
}
