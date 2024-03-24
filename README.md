# Par ou Impar Front
Esse é um projeto simples, um jogo de par ou impar. É um programa onde o usuário adivinha se o número é par ou impar, e o computador retorna se ele acertou ou não. Jogo muito comum em quem era criança da epoca mais antiga. 

# HTML
No HTML foi usado tags semânticas para aumentar a pontuação dos navegadores, além de seguido as boas práticas de comentários no código. O que é mais importante está em letras maiúsculas, levando a uma maior facilidade de manutenção no código.

# CSS e Conceitos de UI/UX
Foi feito uma arquiteturas de pastas separadas, para facilitar a manutenção, além de ficar mais organizado. No style.css foi feito um reset e foi adicionado a fonte do Google, Ubuntu Condensed, pelo fato de dar um ar mais retrô e ao mesmo tempo ficar legal a legibilidade também. Nos conceitos de 60/30/10, o 60% é o branco, não é branco absoluto para evitar desconforto ao usuário. O 30% é o Azul, onde dá um contraste legal e os 10% é o laranja e o preto, um é um botão de ação e o outro é para dar contraste com o fundo.

De acordo com a Psicologia das Cores, o Branco é uma cor neutra e dâ uma aparência mais limpa. O Azul transmite Confiança e Credibilidade, alem de ser a cor com menor rejeição entre os usuários. O Amarelo transmite confiança, otmismo e sabedoria. O preto no fundo gera um contraste legal com o fundo, dando um destaque para o input. Foi utilizado também a regra dos 8 pontos no espaçamento e mantem uma certa consistência

No CSS foi usado Flexbox, Fontes Relativas para caso o usuário mude as configurações do navegador a fonte também muda de tamanho. Foi usado o jeito antigo de alinhar um elemento, pelo fato de que deu algum problema no alinhamento, e eu preferi alinhar assim no momento para deixar o projeto funcionando, mas farei a manutenção logo em seguida. Foi usado media queries para ajustar a responsividade entre os diferentes tipos de telas. O Layout do site foi feito no Figma, usando os conceitos de UI/UX design padrão.

# JavaScript
O código JavaScript é bem simples e ocupa o menor bloco de código de todo o projeto. Tem uma função que remove os acentos, para evitar erros de digitação do usuário. Foi usado Regex (Expressões Regulares) para facilitar a manutenção e deixa o código mais leve. 

Quando o botão é clicado, adiciona um evento no próprio. Foi usado o preventDefault() para evita o comportamento padrão do formulário. Ele pega o valor de entrada do usuário e armazena em uma variável. Depois é gerado um número aleatório entre 0 e 1. Se o número for 0 o resultado é par, se o número é um, o resultado é impar. Foi usado Math.round() para arredondar para o número mais próximo. Depois ele remove os acentos que o usuário pode ter digitado. Se o palpite for igual ao resultado, ele dá um alert na tela dizendo que o usuário acertou, se ele errar exibe um alert, mais sorte na próxima.

# Link do Projeto
[https://paulo19961944.github.io/Par-ou-Impar-Front/](https://paulo19961944.github.io/Par-ou-Impar-Front/)

# Conclusão
Apesar de parecer ser um projeto simples, desenvolver ele no Figma é a parte mais dificil, e foi usado o conceito de Mobile First, onde foi primeiro feito em telas menores, para então ir para telas maiores. O JavaScript é tranquilo de fazer. Espero que tenham gostado e deixo meu fraternal abraço a todos os devs!!!
