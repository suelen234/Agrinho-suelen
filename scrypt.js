// Base de dados simulada de Bioinsumos Reais de Alta Performance
const produtosData = [
    {
        id: 1,
        nome: "Trichoderma Max",
        cientifico: "Trichoderma harzianum",
        categoria: "fungos",
        categoriaLabel: "Fungos Benéficos",
        preco: "45.90 €",
        descricao: "Fungicida microbiológico de alta eficácia. Coloniza as raízes protegendo contra fungos fitopatogénicos do solo.",
        pragas: ["Fusarium", "Rhizoctonia", "Podridão Radicular"],
        culturas: ["Soja", "Milho", "Tomate", "Hortaliças"]
    },
    {
        id: 2,
        nome: "Beauveria Control",
        cientifico: "Beauveria bassiana",
        categoria: "fungos",
        categoriaLabel: "Fungos Benéficos",
        preco: "52.00 €",
        descricao: "Fungos entomopatogénicos que provocam a infeção em insetos sugadores e lagartas, dizimando colónias de pragas.",
        pragas: ["Mosca-Branca", "Tripes", "Cigarrinha"],
        culturas: ["Algodão", "Café", "Citrus", "Tomate"]
    },
    {
        id: 3,
        nome: "Vespa BioShield-T",
        cientifico: "Trichogramma pretiosum",
        categoria: "insetos",
        categoriaLabel: "Insetos Benéficos",
        preco: "89.50 €",
        descricao: "Microvespas parasitoides que atacam diretamente os ovos das pragas antes de estas eclodirem e causarem danos.",
        pragas: ["Lagarta-do-Cartucho", "Broca-do-Tomate", "Traça"],
        culturas: ["Milho", "Soja", "Tomate", "Frutíferas"]
    },
    {
        id: 4,
        nome: "Bacillus Top",
        cientifico: "Bacillus thuringiensis",
        categoria: "pragas",
        categoriaLabel: "Controlo de Pragas",
        preco: "38.00 €",
        descricao: "Inseticida biológico à base de cristais proteicos que eliminam lagartas desfolhadoras por ação de ingestão.",
        pragas: ["Lagarta-da-Soja", "Lagarta-Falsa-Medideira"],
        culturas: ["Soja", "Algodão", "Milho", "Vegetais"]
    },
    {
        id: 5,
        nome: "BioNutre Humus Pro",
        cientifico: "Extrato Húmico Ativado",
        categoria: "biofertilizantes",
        categoriaLabel: "Biofertilizantes",
        preco: "29.90 €",
        descricao: "Fertilizante orgânico líquido rico em ácidos húmicos e fúlvicos para regeneração biológica do ecossistema do solo.",
        pragas: ["Degradação do Solo", "Falta de Nutrientes"],
        culturas: ["Todas as Culturas", "Solo", "Pastagens"]
    },
    {
        id: 6,
        nome: "RhizoFix Inoculante",
        cientifico: "Rhizobium spp.",
        categoria: "biofertilizantes",
        categoriaLabel: "Biofertilizantes",
        preco: "34.00 €",
        descricao: "Bactérias fixadoras de Azoto simbióticas. Eliminam a necessidade de fertilizantes químicos azotados pesados.",
        pragas: ["Deficiência de Azoto"],
        culturas: ["Soja", "Feijão", "Ervilhas", "Leguminosas"]
    },
    {
        id: 7,
        nome: "Cotesia Alvo",
        cientifico: "Cotesia flavipes",
        categoria: "insetos",
        categoriaLabel: "Insetos Benéficos",
        preco: "75.00 €",
        descricao: "Vespas especializadas no controlo biológico de lagartas perfuradoras internas em culturas extensivas.",
        pragas: ["Broca-da-Cana"],
        culturas: ["Cana-de-Açúcar", "Sorgo"]
    }
];

// Estado da Aplicação (Filtros Ativos)
let categoriaAtiva = "todos";
let termoPesquisa = "";
let itensNoCarrinho = 0;

// Seleção de Elementos DOM
const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartBadge = document.querySelector(".cart-badge");

// Elementos de Estatísticas
const countProdutos = document.getElementById("count-produtos");
const countCulturas = document.getElementById("count-culturas");
const countCategorias = document.getElementById("count-categorias");

// Função Principal de Renderização de Cards
function renderizarProdutos(produtosFiltrados) {
    // Limpar grelha antiga
    productsGrid.innerHTML = "";

    if (produtosFiltrados.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    // Loop moderno forEach para criar a estrutura e renderizar os cards
    produtosFiltrados.forEach(produto => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-badge-area">
                <span class="category-badge badge-${produto.categoria}">${produto.categoriaLabel}</span>
                <span class="product-price">${produto.preco}</span>
            </div>
            <div class="product-info">
                <h3>${produto.nome}</h3>
                <p class="scientific-name">${produto.cientifico}</p>
                <p class="product-description">${produto.descricao}</p>
                
                <div class="product-tags">
                    <span class="tag-line"><strong>Alvos:</strong> ${produto.pragas.join(", ")}</span>
                    <span class="tag-line"><strong>Culturas:</strong> ${produto.culturas.join(", ")}</span>
                </div>
                
                <button class="buy-btn" onclick="simularCompra()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                    Adicionar à Cesta
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Função Avançada de Atualização de Estatísticas Dinâmicas baseada no ecrã
function atualizarEstatisticas(produtosVisiveis) {
    // 1. Total de Produtos Visíveis
    countProdutos.textContent = produtosVisiveis.length;

    // 2. Mapeamento e contagem de Culturas únicas visíveis
    const todasCulturas = [];
    produtosVisiveis.forEach(p => todasCulturas.push(...p.culturas));
    const culturasUnicas = [...new Set(todasCulturas)];
    countCulturas.textContent = culturasUnicas.length;

    // 3. Contagem de Categorias únicas ativas na listagem atual
    const categoriasUnicas = [...new Set(produtosVisiveis.map(p => p.categoria))];
    countCategorias.textContent = categoriasUnicas.length;
}

// Mecanismo de Filtragem Combinada (Filtro por Botão + Barra de Pesquisa)
function filtrarBioMercado() {
    // Aplicação do método .filter() moderno
    const resultado = produtosData.filter(produto => {
        // Validação da Categoria selecionada
        const correspondeCategoria = (categoriaAtiva === "todos") || (produto.categoria === categoriaAtiva);

        // Validação do Termo de Pesquisa (Ignora maiúsculas/minúsculas)
        const correspondePesquisa = 
            produto.nome.toLowerCase().includes(termoPesquisa) ||
            produto.cientifico.toLowerCase().includes(termoPesquisa) ||
            produto.descricao.toLowerCase().includes(termoPesquisa) ||
            produto.pragas.some(praga => praga.toLowerCase().includes(termoPesquisa)) ||
            produto.culturas.some(cultura => cultura.toLowerCase().includes(termoPesquisa));

        return correspondeCategoria && correspondePesquisa;
    });

    // Renderizar dados atualizados e recalcular contadores
    renderizarProdutos(resultado);
    atualizarEstatisticas(resultado);
}

// Event Listeners (Escutas de Eventos do Utilizador)

// 1. Barra de Pesquisa Dinâmica (Processamento em tempo real)
searchInput.addEventListener("input", (e) => {
    termoPesquisa = e.target.value.toLowerCase();
    filtrarBioMercado();
});

// 2. Botões de Categoria Interativos
filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Remover classe ativa dos outros botões
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Adicionar classe ativa no botão clicado
        e.target.classList.add("active");

        // Atualizar estado global da categoria e filtrar
        categoriaAtiva = e.target.getAttribute("data-category");
        filtrarBioMercado();
    });
});

// Função Auxiliar de Simulação E-commerce
function simularCompra() {
    itensNoCarrinho++;
    cartBadge.textContent = itensNoCarrinho;
    
    // Efeito visual rápido no badge do carrinho
    cartBadge.style.transform = "scale(1.3)";
    setTimeout(() => {
        cartBadge.style.transform = "scale(1)";
    }, 200);
}

// Inicialização da Aplicação Web ao carregar o ecrã
document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtosData);
    atualizarEstatisticas(produtosData);
});

