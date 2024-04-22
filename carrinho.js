// Recuperar itens do carrinho do localStorage e exibi-los na página
document.addEventListener('DOMContentLoaded', function() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
 let arrCadastro = []




   arrCadastro.push (cadastro)
   console.log(arrCadastro);
   
    const carrinhoContainer = document.getElementById('carrinho-itens');
    carrinhoContainer.innerHTML = '';

    if (carrinhoItens.length === 0) {
        carrinhoContainer.innerHTML = '<p>Carrinho vazio.</p>';
    } else {
        carrinhoItens.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('carrinho-item');
            itemElement.innerHTML = `
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${item.preco.toFixed(2)}</p>
            `;
            carrinhoContainer.appendChild(itemElement);
        });
    }
});

// Limpar o carrinho
document.getElementById('limpar-carrinho').addEventListener('click', function() {
    localStorage.removeItem('carrinho');
    document.getElementById('carrinho-itens').innerHTML = '<p>Carrinho vazio.</p>';
    alert('Carrinho limpo com sucesso!');
});
