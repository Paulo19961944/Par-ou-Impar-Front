// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Regex (Expressão Regular)
}

const btn = document.getElementById('btn'); // Botão de Ação

// Adiciona evento ao botão
btn.addEventListener('click', (event) => {
    event.preventDefault() // Impede o comportamento padrão do formulário
    let game = document.getElementById('game').value; // Captura o valor da input
    let randomNumber = Math.round(Math.random(1)); // Gera  um número aleatório entre 0 e 1
    let resultado = randomNumber === 0 ? 'par' : 'impar'; // Se o número for 0 ele é par, senão ele é impar
    game = removerAcentos(game.toLowerCase()); // Remover acentos e converter para minúsculas

    // Se o Resultado é igual ao que o usuário digitou
    if(game.toLowerCase() === resultado){
        window.alert('Parabéns, você acertou!!!') // Exibe na tela, você acertou.
    } else{
        window.alert('Mais sorte na próxima') // Senão, exibe na tela, mais sorte na próxima
    }
});
