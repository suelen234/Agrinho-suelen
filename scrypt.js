document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-categoria');
    const produtos = document.querySelectorAll('.produto-card');
    const totalItensContador = document.getElementById('total-itens');
    const totalVariedadesContador = document.getElementById('total-variedades');

    function filtrarProdutos(categoriaSelecionada) {
        let itensVisiveis = 0;
        let totalAlvos = 0;

        produtos.forEach(produto => {
            const categoriaProduto = produto.getAttribute('data-categoria');
            const alvosDoProduto = parseInt(produto.getAttribute('data-alvos') || 0);

            if (categoriaSelecionada === 'todos' || categoriaProduto === categoriaSelecionada) {
                produto.classList.remove('hidden');
                itensVisiveis++;
                totalAlvos += alvosDoProduto;
            } else {
                produto.classList.add('hidden');
            }
        });

        // Atualiza os contadores dinamicamente na tela
        totalItensContador.textContent = itensVisiveis;
        totalVariedadesContador.textContent = totalAlvos;
    }

    // Adiciona evento de clique a cada botão de categoria
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            botoes.forEach(b => b.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão clicado
            botao.classList.add('active');

            // Obtém a categoria do botão e executa o filtro
            const categoria = botao.getAttribute('data-categoria');
            filtrarProdutos(categoria);
        });
    });

    // Executa a função inicialmente para contar todos os produtos ao carregar a página
    filtrarProdutos('todos');
});
