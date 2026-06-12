// Banco de Dados Abstrato Unificado - Bioinsumos e Hortofrutícolas de Alto Nível
const BANCO_PRODUTOS = [
    // --- CATEGORIA: FUNGOS BENEFICOS ---
    {
        id: 1,
        nome: "Trichoderma Gold Protect",
        subtitulo: "Trichoderma harzianum",
        categoria: "fungos",
        categoriaLabel: "Fungos Benéficos",
        preco: 44.90,
        precoDisplay: "44.90 € / kg",
        descricao: "Fungicida microbiológico premium de alta concentração. Age colonizando o sistema radicular e impedindo o avanço de fungos maléficos do solo.",
        alvoLabel: "Combate",
        alvoItens: ["Fusarium", "Rhizoctonia", "Podridão Radicular"],
        aplicacaoLabel: "Recomendado para",
        aplicacaoItens: ["Soja", "Milho", "Tomate", "Hortaliças"]
    },
    {
        id: 2,
        nome: "Metarhizium Combat Eco",
        subtitulo: "Metarhizium anisopliae",
        categoria: "fungos",
        categoriaLabel: "Fungos Benéficos",
        preco: 49.00,
        precoDisplay: "49.00 € / L",
        descricao: "Agente biológico focado no controlo de insetos terrestres e ninfas. Penetra na cutícula do inseto provocando a eliminação natural da colónia.",
        alvoLabel: "Combate",
        alvoItens: ["Cigarrinha-da-raiz", "Cigarrinha-das-pastagens", "Larva-alfinete"],
        aplicacaoLabel: "Recomendado para",
        aplicacaoItens: ["Cana-de-açúcar", "Pastagens", "Milho"]
    },

    // --- CATEGORIA: INSETOS AUXILIARES ---
    {
        id: 3,
        nome: "Vespa Parasitoide Trichom-Max",
        subtitulo: "Trichogramma pretiosum",
        categoria: "insetos",
        categoriaLabel: "Insetos Auxiliares",
        preco: 78.00,
        precoDisplay: "78.00 € / un",
        descricao: "Cartelas contendo ovos de microvespas benéficas. Elas realizam o parasitismo de ovos de pragas, impedindo o nascimento de lagartas.",
        alvoLabel: "Combate",
        alvoItens: ["Lagarta-do-cartucho", "Broca-do-tomate", "Traça-das-crucíferas"],
        aplicacaoLabel: "Recomendado para",
        aplicacaoItens: ["Tomate", "Milho", "Algodão", "Frutíferas"]
    },

    // --- CATEGORIA: BIOFERTILIZANTES ---
    {
        id: 4,
        nome: "Rhizofix Inoculante Simbiótico",
        subtitulo: "Bradyrhizobium japonicum",
        categoria: "biofertilizantes",
        categoriaLabel: "Biofertilizantes",
        preco: 22.50,
        precoDisplay: "22.50 € / L",
        descricao: "Bactérias fixadoras biológicas de nitrogénio (FBN). Capturam o nitrogénio do ar e injetam diretamente na corrente da planta de forma orgânica.",
        alvoLabel: "Nutrição",
        alvoItens: ["Deficiência de Nitrogénio", "Degradação Orgânica"],
        aplicacaoLabel: "Recomendado para",
        aplicacaoItens: ["Soja", "Feijão", "Lentilhas", "Leguminosas"]
    },
    {
        id: 5,
        nome: "BioAtivador Humus-Pro Liquido",
        subtitulo: "Ácidos Húmicos e Fúlvicos",
        categoria: "biofertilizantes",
        categoriaLabel: "Biofertilizantes",
        preco: 29.95,
        precoDisplay: "29.95 € / 5L",
        descricao: "Condicionador biológico concentrado que reestrutura a atividade biológica benéfica do solo e estimula o enraizamento profundo.",
        alvoLabel: "Nutrição",
        alvoItens: ["Absorção de Fósforo", "Microbioma do Solo"],
        aplicacaoLabel: "Recomendado para",
        aplicacaoItens: ["Todos os tipos de solo", "Hortas", "Pomares"]
    },

    // --- CATEGORIA: CONTROLO DE PRAGAS (Geral / Extratos) ---
    {
        id: 6,
        nome: "Bacillus Thuri-Control",
        subtitulo: "Bacillus thuringiensis",
        categoria: "pragas",
        categoriaLabel: "Controlo de Pragas",
        preco: 36.80,
        precoDisplay: "36.80 € / kg",
        descricao: "Inseticida biológico natural altamente específico. Atua por ingestão na lagarta desfolhadora, sem afetar animais ou polinizadores.",
        alvoLabel: "Combate",
        alvoItens: ["Lagarta-falsa-medideira", "Lagarta-do-olho-azul", "Lagarta-da-soja"],
        aplicacaoLabel: "Recomendado para",
        aplicacaoItens: ["Hortaliças", "Soja", "Algodão", "Girassol"]
    },

    // --- CATEGORIA: FRUTAS FRESCAS ---
    {
        id: 7,
        nome: "Morango Biológico Sweet-Bio",
        subtitulo: "Origem: Estufas Sustentáveis Alentejo",
        categoria: "frutas",
        categoriaLabel: "Frutas Frescas",
        preco: 3.49,
        precoDisplay: "3.49 € / Embalagem 500g",
        descricao: "Morangos premium cultivados sob proteção biológica ativa com o uso de Trichoderma e ácaros benéficos, livres de resíduos químicos.",
        alvoLabel: "Certificação",
        alvoItens: ["100% Orgânico", "Resíduo Químico Zero"],
        aplicacaoLabel: "Sabor e Nutrição",
        aplicacaoItens: ["Vitamina C", "Antioxidantes Naturais"]
    },
    {
        id: 8,
        nome: "Maçã de Alcobaça IGP Orgânica",
        subtitulo: "Cultivo Protegido com Microvespas",
        categoria: "frutas",
        categoriaLabel: "Frutas Frescas",
        preco: 2.19,
        precoDisplay: "2.19 € / kg",
        descricao: "Maçãs crocantes de sabor equilibrado. A produção evitou inseticidas tradicionais usando barreira biológica natural de feromonas e vespas.",
        alvoLabel: "Certificação",
        alvoItens: ["Indicação Geográfica Protegida", "Produção Integrada"],
        aplicacaoLabel: "Sabor e Nutrição",
        aplicacaoItens: ["Fibra Solúvel", "Consumo Fresco"]
    },

    // --- CATEGORIA: VERDURAS E LEGUMES ---
    {
        id: 9,
        nome: "Tomate Chucha Seleção Orgânica",
        subtitulo: "Nutrido com Inoculantes Rhizobium",
        categoria: "verduras",
        categoriaLabel: "Verduras e Legumes",
        preco: 2.89,
        precoDisplay: "2.89 € / kg",
        descricao: "Tomates firmes e sumarentos, colhidos no ponto ideal de maturação. Plantação forte auxiliada por biofertilizantes húmicos líquidos.",
        alvoLabel: "Certificação",
        alvoItens: ["Cultivo Regenerativo", "Sem Agrotóxicos"],
        aplicacaoLabel: "Sabor e Nutrição",
        aplicacaoItens: ["Rico em Licopeno", "Saladas", "Molhos Gourmet"]
    },
    {
        id: 10,
        nome: "Brócolos Calabrês Premium",
        subtitulo: "Protegido por Bacillus Thuri",
        categoria: "verduras",
        categoriaLabel: "Verduras e Legumes",
        preco: 1.98,
        precoDisplay: "1.98 € / un",
        descricao: "Inflorescências verdes intensas e compactas. Defendidos da lagarta-da-couve através do controlo biológico molecular natural.",
        alvoLabel: "Certificação",
        alvoItens: ["Colheita Manual", "Nutrição Biológica"],
        aplicacaoLabel: "Sabor e Nutrição",
        aplicacaoItens: ["Fibras Ativas", "Cozidos a vapor", "Preparo Fitness"]
    }
];

// --- ESTADO GLOBAL DA APLICAÇÃO ---
let CATEGORIA_SELECIONADA = "todos";
let TERMO_PESQUISA = "";
let VALOR_CARRINHO = 0.00;
let QTD_CARRINHO = 0;

// --- ELEMENTOS DO DOM ---
const elements = {
    productsGrid: document.getElementById("productsGrid"),
    emptyState: document.getElementById("emptyState"),
    searchInput: document.getElementById("searchInput"),
    tabButtons: document.querySelectorAll(".tab-btn"),
    sectionTitle: document.getElementById("sectionTitle"),
    sectionCount: document.getElementById("sectionCount"),
    cartBadge: document.getElementById("cartBadge"),
    cartTotal: document.getElementById("cartTotal"),
    toast: document.getElementById("toast"),
    metricProdutos: document.getElementById("metric-produtos"),
    metricVariedades: document.getElementById("metric-variedades"),
    logoReset: document.getElementById("logoReset")
};

// --- FUNÇÃO DE RENDERIZAÇÃO PRINCIPAL (Foco em Performance e Métodos Modernos) ---
function renderizarPlataforma() {
    // 1. Aplicação Exclusiva do Método .filter() baseada nos estados combinados
    const produtosFiltrados = BANCO_PRODUTOS.filter(produto => {
        const matchesCategory = (CATEGORIA
