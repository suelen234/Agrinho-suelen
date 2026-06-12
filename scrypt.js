// Base de Dados de Produtos Simulada
const listaProdutos = [
    { id: 1, nome: "Trichoderma harzianum", categoria: "fungos", alvos: 1, preco: 45.00, desc: "Combate fungos fitopatógenos de solo como Pythium e Rhizoctonia.", solucao: "Proteção radicular interna de culturas botânicas." },
    { id: 2, nome: "Beauveria bassiana", categoria: "fungos", alvos: 2, preco: 38.50, desc: "Fungo isolado para o controlo biológico de insetos e ácaros praga.", solucao: "Controlo adaptativo contra Mosca-branca e Tripes." },
    { id: 3, nome: "Joaninhas Predadoras", categoria: "insetos", alvos: 1, preco: 22.00, desc: "Predador natural ativo indicado para infestações severas ao ar livre.", solucao: "Eliminação ecológica de colónias de piolhos/pulgões." },
    { id: 4, nome: "BioN-Fixador", categoria: "biofertilizantes", alvos: 3, preco: 54.90, desc: "Inoculante bacteriano focado na captação de azoto atmosférico livre.", solucao: "Nutrição vegetal avançada sem contaminação química." },
    { id: 5, nome: "Extrato de Neem Puro", categoria: "controlo", alvos: 4, preco: 19.90, desc: "Inseticida e repelente natural de largo espetro de ação biológica.", solucao: "Repulsão e quebra do ciclo reprodutivo de lagartas." },
    { id: 6, nome: "Morango Biológico Rocha", categoria: "frutas", alvos: 1, preco: 4.50, desc: "Morangos frescos colhidos no dia, 100% livres de pesticidas residuais.", solucao: "Consumo direto saudável vindo da terra." }
];

let carrinho = [];
let categoriaAtiva = "all";
let termoPesquisa = "";

document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos();
    configurarFiltros();
    configurarCarrinho();
});

// Renderização Dinâmica dos Cards
function renderizarProdutos() {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    const produtosFiltrados = listaProdutos.filter(prod => {
        const matchesCategory = (categoriaAtiva === "all" || prod.categoria === categoriaAtiva);
        const matchesSearch = prod.nome.toLowerCase().includes(termoPesquisa) || 
                              prod.desc.toLowerCase().includes(termoPesquisa) ||
                              prod.solucao.toLowerCase().includes(termoPesquisa);
        return matchesCategory && matchesSearch;
    });

    produtosFiltrados.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div>
                <span class="product-tag">${prod.categoria.toUpperCase()}</span>
                <h3>${prod.nome}</h3>
                <p class="product-desc">${prod.desc}</p>
                <div class="solution-box"><strong>Solução:</strong> ${prod.solucao}</div>
            </div>
            <div class="product-footer">
                <span class="price">${prod.preco.toFixed(2)} €</span>
                <button class="add-btn" onclick="adicionarAoCarrinho(${prod.id})">Adicionar</button>
            </div>
        `;
        container.appendChild(card);
    });

    // Atualização dos Painéis de Contadores superiores
    document.getElementById("counter-items").textContent = produtosFiltrados.length;
    const totalAlvos = produtosFiltrados.reduce((sum, item) => sum + item.alvos, 0);
    document.getElementById("counter-targets").textContent = totalAlvos;
}

// Lógica de Filtros e Inputs
function configurarFiltros() {
    const botoes = document.querySelectorAll(".category-btn");
    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            botoes.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            categoriaAtiva = btn.getAttribute("data-category");
            renderizarProdutos();
        });
    });

    const inputPesquisa = document.getElementById("search-input");
    inputPesquisa.addEventListener("input", (e) => {
        termoPesquisa = e.target.value.toLowerCase();
        renderizarProdutos();
    });
}

// Gestão de estado do Carrinho de Compras
function configurarCarrinho() {
    const toggle = document.getElementById("cart-toggle");
    const close = document.getElementById("cart-close");
    const sidebar = document.getElementById("cart-sidebar");

    toggle.addEventListener("click", () => sidebar.classList.add("open"));
    close.addEventListener("click", () => sidebar.classList.remove("open"));
}

window.adicionarAoCarrinho = function(id) {
    const produto = listaProdutos.find(p => p.id === id);
    const itemNoCarrinho = carrinho.find(item => item.id === id);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    atualizarInterfaceCarrinho();
};

function atualizarInterfaceCarrinho() {
    const containerItens = document.getElementById("cart-items-container");
    containerItens.innerHTML = "";

    let valorTotal = 0;
    let totalItens = 0;

    carrinho.forEach(item => {
        valorTotal += item.preco * item.quantidade;
        totalItens += item.quantidade;

        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>${(item.preco * item.quantidade).toFixed(2)} €</span>
        `;
        containerItens.appendChild(row);
    });

    // Atualiza indicadores do cabeçalho e da barra lateral
    document.getElementById("cart-count").textContent = totalItens;
    document.getElementById("cart-total-price").textContent = valorTotal.toFixed(2);
    document.getElementById("modal-total-price").textContent = valorTotal.toFixed(2);
}
