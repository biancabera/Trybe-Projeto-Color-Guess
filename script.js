// Requisito 4 consultei o site a seguir para poder aplicar o Math.random https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20RGBA&text=A%20fun%C3%A7%C3%A3o%20Math.,ser%C3%A1%20a%20opacidade%20da%20cor.
window.onload = inserindoCores;

function gerandoCores() { 
// Utilizei o math.floor para usar o número inteiro gerado, caso seja gerado um r=234,23 ele vai retornar 234, retornando um número menor, evitando ter números quebrados de cores rgb
   let r = Math.floor(Math.random() * 255);
   let g = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
// em vez de utilizar o $ como na fonte acima, aderi a concatenação de cada letra e virgula, o que acabou servindo também.
   let rgb = "rgb("+r+","+g+","+b+")";
   return rgb
}
// depois faço uma função inserindo a função acima na de baixo
function inserindoCores () {
let ball = document.querySelectorAll('.ball');
for (index = 0; index < ball.length; index += 1) {
// e para concluir, com essa função, acessei minha classe ball, percorrendo ela, adicionando uma cor de fundo aleatória através da função que randomiza os valores RGB
ball[index].style.backgroundColor = gerandoCores();
// fiz um indice gerado por um número aleatorio com Math.random para selecionar o RGB de qual círculo será mostrado no id rgb-color toda vez que atualizar a página
let posicaoAleatoria = Math.floor(Math.random() * 5);
const bolas = document.querySelectorAll('.ball');
const adivinhe = document.getElementById('rgb-color');
adivinhe.innerText = bolas[posicaoAleatoria].style.backgroundColor;
    }
}
    
// Requisito 5
const bolaum = document.querySelectorAll('.ball');
for (index = 0; index < bolaum.length; index += 1){
bolaum[index].addEventListener('click', bolaResposta);
}
// a função abaixo compara se o texto da id rgb-color é igual ao rgb do circulo clicado, com isso, inserindo na id answer se a resposta está certa ou não.
function bolaResposta (event) { 
 const rgbColor = document.getElementById('rgb-color');
 const checando = event.target.style.backgroundColor;
 const answer = document.getElementById('answer');
 
 if (checando === rgbColor.innerText) {answer.innerText = "Acertou!"} 
 else {answer.innerText = "Errou! Tente novamente!"} 
 contagemPontos()
}

// Requisito 6
// Pesquisei sobre função de refresh web page https://www.stechies.com/refresh-web-page-javascript/#:~:text=reload()%20method%20or%20the%20window.&text=reload()%20method%20gives%20the,be%20reloaded%20from%20the%20server.
const botao = document.getElementById('reset-game'); 
botao.addEventListener('click', resetGame);
function resetGame() { 
   window.location.reload() 
}

// Requisito 7 
// bolaum[index].addEventListener('click', contagemPontos);
function contagemPontos (event) { 
   let placar = document.getElementById('score');
   let pontos = 0;
   let rgbColor = document.getElementById('rgb-color');
   let checando = event.target.style.backgroundColor;
   
   if (checando === rgbColor.innerText) {pontos = pontos + 3} 
   placar.innerText = "Placar: " + pontos;
  }