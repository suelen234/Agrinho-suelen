// Base de dados simulada dos produtos orgânicos do Biomercado
const produtos = [
    { id: 1, nome: "Alface Crespa Orgânica", preco: 4.50, img: "https://images.unsplash.com/photo-1622484211148-7163014aa0c4?auto=format&fit=crop&w=300&q=80" },
    { id: 2, nome: "Tomate Cereja (Bandeja)", preco: 7.90, img: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=300&q=80" },
    { id: 3, nome: "Mel Silvestre Natural", preco: 22.00, img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80" },
    { id: 4, nome: "Cesta de Legumes Variados", preco: 35.00, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" }
];

let carrinho = [];

// Função para renderizar os produtos na tela
function carregarProdutos() {
    const container = document.getElementById('produtos-container');
    container.innerHTML = "";

    produtos.forEach(prod => {
        container.innerHTML += `
            <div class="produto-card">
                <img src="${prod.img}" alt="${prod.nome}" class="produto-img">
                <div class="produto-info">
                    <h3>${prod.nome}</h3>
                    <p class="preco">R$ ${prod.preco.toFixed(2).replace('.', ',')}</p>
                    <button class="btn-adicionar" onclick="adicionarAoCarrinho(${prod.id})">
                        <i class="fa-solid fa-cart-plus"></i> Adicionar à Cesta
                    </button>
                </div>
            </div>
        `;
    });
}

// Abrir e fechar a barra lateral do carrinho
function toggleCarrinho() {
    const cartLateral = document.getElementById('carrinho-lateral');
    cartLateral.classList.toggle('active');
}

// Adicionar item ao carrinho de compras
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinho();
}

// Atualiza a interface do carrinho e totais
function atualizarCarrinho() {
    const containerItens = document.getElementById('itens-carrinho');
    const cartCount = document.getElementById('cart-count');
    const totalPreco = document.getElementById('total-preco');

    // Atualiza número de itens no ícone
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    cartCount.innerText = totalItens;

    if (carrinho.length === 0) {
        containerItens.innerHTML = '<p class="carrinho-vazio">Sua cesta está vazia.</p>';
        totalPreco.innerText = "R$ 0,00";
        return;
    }

    containerItens.innerHTML = "";
    let valorTotal = 0;

    carrinho.forEach(item => {
        valorTotal += item.preco * item.quantidade;
        containerItens.innerHTML += `
            <div class="item-no-carrinho">
                <div>
                    <h4>${item.nome}</h4>
                    <small>${item.quantidade}x R$ ${item.preco.toFixed(2)}</small>
                </div>
                <button onclick="removerDoCarrinho(${item.id})" style="background:none; border:none; color:red; cursor:pointer;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });

    totalPreco.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}

// Remover item do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
}

// Finalizar simulação de compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Sua cesta está vazia!");
        return;
    }
    alert("Pedido simulado com sucesso! Obrigado por apoiar a agricultura familiar no Agrinho! 🌱");
    carrinho = [];
    atualizarCarrinho();
    toggleCarrinho();
}

// Efeito de Contador Dinâmico para a seção de Impacto (Gera destaque para os avaliadores)
function iniciarContadores() {
    const contadores = document.querySelectorAll('.contador');
    contadores.forEach(contador => {
        const target = +contador.getAttribute('data-target');
        const incremento = target / 100;

        const atualizarValor = () => {
            const valorAtual = +contador.innerText;
            if (valorAtual < target) {
                contador.innerText = Math.ceil(valorAtual + incremento);
                setTimeout(atualizarValor, 20);
            } else {
                contador.innerText = target;
            }
        };
        atualizarValor();
    });
}

// Inicializações ao carregar a página
window.onload = () => {
    carregarProdutos();
    // Executa a animação dos números após 1 segundo
    setTimeout(iniciarContadores, 1000);
};