document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
    
    document.querySelectorAll('#menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }

});

function adicionarCarrinho(botao) {
  const nome = botao.getAttribute('data-nome');
  const preco = parseFloat(botao.getAttribute('data-preco'));

  
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  
  carrinho.push({ nome, preco });

  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  alert(nome + " foi adicionado ao carrinho!");
}

window.onload = function() {
  let lista = document.getElementById('lista-carrinho');
  if (lista) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let subtotal = 0;

    carrinho.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item.nome + " - R$" + item.preco.toFixed(2);
      lista.appendChild(li);
      subtotal += item.preco;
    });

    document.getElementById('subtotal').textContent = 
      "Subtotal: R$" + subtotal.toFixed(2);
  }
};

function removerCarrinho() {
  localStorage.removeItem('carrinho');

  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = "";

  document.getElementById('subtotal').textContent = "Subtotal: R$0.00";

  alert("Carrinho foi esvaziado!");
}


