document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de interatividade: Botões "Adicionar ao Carrinho"
    const botoesCarrinho = document.querySelectorAll('.btn-add-carrinho');

    botoesCarrinho.forEach(botao => {
        botao.addEventListener('click', () => {
            const produtoNome = botao.closest('.produto-item').querySelector('h3').textContent;
            alert(`"${produtoNome}" adicionado ao carrinho! (Funcionalidade de carrinho não implementada)`);
            // Aqui você adicionaria a lógica real para adicionar ao carrinho,
            // como armazenar em um array ou enviar para um backend.
        });
    });

    // Exemplo: Rolagem suave para os links do menu
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Ajusta para o cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Você pode adicionar mais JavaScript aqui para:
    // - Um carrossel de imagens na seção hero
    // - Filtros de produtos
    // - Validação de formulários (como o de newsletter)
    // - Efeitos de animação (rolagem, hover)
});