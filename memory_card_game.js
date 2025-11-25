let cartas_tabuleiro = new Array();// é um, array numérico de 10 posições onde cada número corresponde a um personagem.
let cartas_reveladas = new Array();//este array contém os ids  das cartas que já foram reveladas, usado na função
//carta_revelada, que vai retornar true se a carta já tiver sido revelada ou false caso ainda não tenha.
let acertos = 0;
let tentativas = 7;
let pontos = 0;
let numero_personagem = 9;
let caminho1 = "";
let caminho2 = "";
let idcarta = "";
const TEMPO_VISUALIZACAO_CARTAS = 3000; // 3 segundos



function pegar_id(){ //essa função pega o id do elemento clicado - usa jquery
$(document).ready(function(){
  $(".container-novo").find(".p2").click(function(){
     idcarta = $(this).attr("id");
     caminho2 = idcarta.substring(3,idcarta.length);
     idcarta = "    "+idcarta;
     idcarta.trim();
     caminho2 = "   "+caminho2;
     caminho2.trim();
     
  });
});
}

function iniciar_jogo_memoria(){
  mostrar_carta_principal();
  gerar_personagens_carta();
  cartas_reveladas.push(0); //somente para iniciar o array com alguma posição
}


function mudar_personagem_carta(){
  numero_personagem++;
  document.getElementById("selecionado").src = mudar_personagem(numero_personagem);
  //document.getElementById("selecionado").setAttribute('src',mudar_personagem(numero_personagem));
  document.getElementById("selecionado").name= mudar_personagem(numero_personagem);
  //document.getElementById("selecionado").setAttribute('name',mudar_personagem(numero_personagem));
  caminho1 = mudar_personagem(numero_personagem);
}


function mudar_personagem(numero){
  if(numero > 9 ) {
    numero = (numero % 10);
  }
  return caminho_figura(numero);
}


function numero_figura(caminho) {
  let numero = 0;
  switch(caminho){
    case caminho = "images/DrWily3.jpg" :
        numero = 0;
        break;
    case caminho = "images/cutman_v2.jpeg":
        numero = 1;
        break;
    case caminho = "images/gutsman.jpg":
        caminho = 2;
        break;
    case caminho = "images/Elecman.jpg":
        caminho = 3;
        break;
    case caminho = "images/iceman_v1.jpeg":
        numero = 4;
        break;
    case caminho = "images/fireman.jpg":
        numero = 5;
        break;
    case caminho = "images/bombman.jpg" :
        numero = 6;
        break;
    case caminho = "images/roll.png":
        numero = 7;
        break;
    case caminho = "images/Dr_Light_v2.jpeg":
        numero = 8;
        break;
    case caminho = "images/Megaman.png":
        numero = 9;
        break;
  }
  return numero;

}


function caminho_figura(cor_numero){
    let caminho = "";
    switch(cor_numero){
        case 0:
            caminho = "images/DrWily3.jpg";
            break;
        case 1:
            caminho = "images/cutman_v2.jpeg";
            break;
        case 2:
            caminho = "images/gutsman.jpg";
            break;
        case 3:
            caminho = "images/Elecman.jpg";
            break;
        case 4:
            caminho = "images/iceman_v1.jpeg";
            break;
        case 5:
            caminho = "images/fireman.jpg";
            break;
        case 6:
            caminho = "images/bombman.jpg";
            break;
        case 7:
            caminho = "images/roll.png";
            break;
        case 8: 
            caminho = "images/Dr_Light_v2.jpeg";
            break;
        case 9:
            caminho = "images/Megaman.png";
            break;
    }
    return caminho;
}

function mostrar_carta_principal(){
  document.getElementById("selecionado").src   = caminho_figura(numero_personagem);
  //document.getElementById("selecionado").setAttribute('src',caminho_figura(numero_personagem));
  document.getElementById("selecionado").name   = caminho_figura(numero_personagem);
  //document.getElementById("selecionado").setAttribute('name', caminho_figura(numero_personagem));
  caminho1 = caminho_figura(numero_personagem);
}

function carta_revelada(id) { //esta função previne que o jogador escolha uma carta já revelada do tabuleiro - retorna true ou false
 for(let cd = 0; cd < cartas_reveladas.length; cd++) {
  if (id == cartas_reveladas[cd])
    {return true;}
  }
}

function escolher_carta(id){
   
  caminho2 = document.getElementById(id).name;
  if(tentativas > 0) {
    if(carta_revelada(id) != true){
      if (caminho1 == caminho2) {
      acertar(id);}
      else {
      errar(id);
     }
    }
  }

  else {atualizar();}

}

function errar(idcarta){
  atualizar();
  tentativas--;
  aparecer();
  revelar_carta(idcarta);
  document.getElementById("pontuacao").innerHTML = " " + pontos;
  document.getElementById("tentativas").innerHTML = " " + tentativas;
  setTimeout(function(){document.getElementById(idcarta).src = "images/fundo_carta.jpeg"},500);
  
}

function acertar(idcarta){
  pontos ++;
  cartas_reveladas.push(idcarta);
  aparecer_desaparecer();
  revelar_carta(idcarta);
  document.getElementById("pontuacao").innerHTML = " "+pontos;
  document.getElementById("tentativas").innerHTML = " "+tentativas;
  if(pontos >=12){pontuar();}
 

}

function revelar_carta(idcarta) {
  setTimeout(function(){girar_carta(idcarta)},30);
  girar_carta(idcarta);
  document.getElementById(idcarta).src = caminho2;
  //document.getElementById(idcarta).setAttribute("src", caminho2);
}

function pegar_elemento_clicado(){
  
  //document.querySelectorAll("img").forEach( function(img) {
      document.querySelectorAll(".p2").forEach( function(img) {
      img.addEventListener("click", function(event){
      //let elemento = event.target || event.srcElement;
      let elemento = event.target
      let id = elemento.id;
      //let src = elemento.src
      id = elemento.getAttribute("id");
      id = id.toString();
      //id = id.substr(3,id.length);
      document.getElementById("meuid").innerHTML = id;
      document.getElementById("meuid2").innerHTML = id;
      return id;
  })
  });  
}

function aux_retornar_id_elemento_clicando(){
  document.querySelectorAll(".p2").forEach( function(img) {
  img.addEventListener("click", function(event){  
    let elemento = event.target || event.srcElement;
  })
});
}

function retornar_id_elemento_clicado() { 
      let id = "";
      //seleciono todos os elementos da classNamee desejada
      document.querySelectorAll(".p2").forEach( function(img) {
      //adiciono listener em todos eles
      img.addEventListener("click", function(event){
      let elemento = event.target || event.srcElement;
      id = "   " + elemento.id;
      id = id.trim();
      id = id.substring(3,id.length);
      document.getElementById("meuid2").innerHTML = id;
      return id;   
  })
  });  
}



function gerar_senha_cores() {
  for (let c = 0; c <= 3 ; c++) {
    let n1 = Math.floor(Math.random() * 8);
    senha_cores[c] = n1;
  }
}

function gerar_personagens_carta(){
  //gera doze numeros aleatorios de 0 ate 10
  let n1 = 0; 
  for (let ca = 0; ca <= 11 ; ca++) {
    n1 = Math.floor(Math.random() * 10);
    cartas_tabuleiro[ca] = n1;
  //para cada um destes numeros pegar o atributo src correspondete (imagem) e colocar na carta
  let nome = "";
  for (cb = 0; cb < cartas_tabuleiro.length; cb++) 
  {
    document.getElementsByClassName("p2")[cb].src = caminho_figura(cartas_tabuleiro[cb]);
    //document.getElementsByClassName("p2")[cb].setAttribute('src', caminho_figura(cartas_tabuleiro[cb]));
    //document.getElementsByClassName("p2")[cb].id = algarismo_aleatorio() + caminho_figura(cartas_tabuleiro[cb]);
    nome = caminho_figura(cartas_tabuleiro[cb]);
    document.getElementsByClassName("p2")[cb].name = nome;
    //document.getElementsByclassName("p2")[cb].name = caminho_figura(cartas_tabuleiro[cb]);
    //document.getElementsByclassName("p2")[cb].setAttribute('name', caminho_figura(cartas_tabuleiro[cb]));
  }
  //colocar a imagem (ou o numero) correspondente no atributo name de cada carta.

  setTimeout(function(){girar_todas()},500);
  //girar as cartas
  
  //voltar as cartas para o fundo padrão
  setTimeout(function(){esconder_imagens_cartas()},TEMPO_VISUALIZACAO_CARTAS);
}
}

function esconder_imagens_cartas(){
 
  for (let cc = 0; cc <= 12;cc++){
    //document.getElementsByClassName('p2')[0].src = "images/fundo_carta.jpeg";
    document.getElementsByClassName('p2')[cc].src = "images/fundo_carta.jpeg";
    //document.getElementsByClassName('p2')[cc].setAttribute('src',"images/fundo_carta.jpeg");
    }
    
}


function escolher(cor,numero){
  if (tentativas >= 1) 
  {
  //primeiro preciso descobrir qual é a posição do array senha_cores q estamos tentando adivinhar
  //para isso faço um switch do número de acertos
  switch(acertos) {
    case 0:
      id = "s1";
      break;
    case 1:
      id = "s2";
      break;
    case 2:
      id = "s3";
      break;
    case 3:
      id= "s4";
      break;
    default:
      finalizar();
      break;
  }
  numero = numero * 1; //só para me certificar que recebi o número correspondente a cor lá do html
  if (numero == senha_cores[acertos]) {
    //efeito de girar a carta
    girar_carta(id);
    document.getElementById(id).style.backgroundColor = cor;
    document.getElementById(id).innerHTML = '&nbsp;&nbsp;&nbsp;<i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;';
    acertos++;
    tentativas = 7;
    pontos++;
    aparecer_desaparecer();
    atualizar();
  }
  else {
    aparecer();
    tentativas--;
    atualizar();
  }
  } //fim do if da função escolher
  } //fim da função escolher



function atualizar(){
    
    if (pontos >= 12 || tentativas <= 0 ) {
      pontuar();
      document.getElementById("reiniciar").style.display = "block";
     
    }

  }


function girar_carta(id) {
  document.getElementById(id).className += 'carta-girando-3d ';
  //document.getElementById(id).setAttribute('className', ' carta-girando-3d '+ document.getElementById(id).className );
  setTimeout(()=>{document.getElementById(id).className='p2'},2000); //os 2000 têm que ser o mesmo do css da classNamee
}

function girar_carta_180(id) {
  document.getElementById(id).className += ' carta-girando-x ';
  setTimeout(()=>{document.getElementById(id).className='p2'},2000);
}

function girar_todas(){
  for (let a = 0; a < 12; a++) {
  document.getElementsByClassName('p2')[a].className += ' carta-girando-x ';
  setTimeout(()=>{document.getElementsByClassName('carta-girando-x')[a].className ='p2'},2000);
  }
}

function girar_todas_2(){
  
  document.getElementsByClassName('p2')[0].className = 'carta-girando-x';
  setTimeout(()=>{document.getElementsByClassName('carta-girando-x')[0].className='p2'},2000);
  
}



function desaparecer(){
  $('#erro').hide();
}

function aparecer() {
  $('#erro').show();
  setTimeout(desaparecer,1500)
}

function aparecer_desaparecer() {
  $('#acerto').show();
  setTimeout(() => {
    $('#acerto').hide()
  }, 1500);
}

function pontuar(){
  pontos = pontos + (tentativas * 5);
  document.getElementById("acerto").innerHTML = '<i class="fa-solid fa-face-grin-stars"></i>';
  document.getElementById("tentativas").innerHTML = '&nbsp;<i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;';
  document.getElementById("pontuacao").innerHTML = "Parabéns, você conseguiu " + pontos;
  verificarVitoria();
}



function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function algarismo_aleatorio(){
  //gera uma string de quatro algarismos randomica para adicionar como id 
  //nas cartas do tabuleiro
  let na = Math.floor(Math.random() * 10);
  let nb = Math.floor(Math.random() * 10);
  let nc = Math.floor(Math.random() * 10);
  na = " " + na + " ";
  nb = " " + nb + " ";
  nc = " " + nc + " ";
  na = na.trim();
  nb = nb.trim();
  nc = nc.trim();
  return (na+nb+nc);
}


function verificarVitoria() {
    if (pontos >=12) {
        setTimeout(efeitoVitoria, 500);
    }
}

function efeitoVitoria() {
    // Efeito de pulsar em todas as cartas
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(carta => {
        carta.classList.add('pulsar-vitoria');
        carta.classList.add('brilho-vitoria');
    });
    
    // Efeito de revelação
    const container = document.querySelector('.container-novo');
    container.classList.add('revelar-cartas');
    
    // Criar confetes
    criarConfetes();
    
    // Mostrar mensagem de vitória
    mostrarMensagemVitoria();
}

function criarConfetes() {
    const container = document.querySelector('.container-fluid');
    const confeteContainer = document.createElement('div');
    confeteContainer.className = 'confete-container';
    confeteContainer.style.position = 'fixed';
    confeteContainer.style.top = '0';
    confeteContainer.style.left = '0';
    confeteContainer.style.width = '100%';
    confeteContainer.style.height = '100%';
    confeteContainer.style.pointerEvents = 'none';
    confeteContainer.style.zIndex = '1000';
    
    for (let i = 0; i < 150; i++) {
        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.style.left = Math.random() * 100 + 'vw';
        confete.style.animationDelay = Math.random() * 3 + 's';
        confeteContainer.appendChild(confete);
    }
    
    document.body.appendChild(confeteContainer);
    
    // Remover confetes após a animação
    setTimeout(() => {
        if (confeteContainer.parentNode) {
            confeteContainer.parentNode.removeChild(confeteContainer);
        }
    }, 4000);
}

function mostrarMensagemVitoria() {
    const mensagem = document.createElement('div');
    mensagem.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            z-index: 1001;
            border: 3px solid gold;
            animation: pulsar-vitoria 2s infinite;
        ">
            <h2 style="color: gold; margin-bottom: 20px;"> PARABÉNS! </h2>
            <p style="font-size: 18px; margin-bottom: 15px;">Você venceu o jogo!</p>
            <p style="font-size: 16px;">Pontuação: ${pontos}</p>
            <button onclick="this.parentElement.parentElement.remove(); reiniciarJogo();" 
                    style="margin-top: 15px; padding: 10px 20px; background: gold; border: none; border-radius: 5px; cursor: pointer;">
                Jogar Novamente
            </button>
        </div>
    `;
    document.body.appendChild(mensagem);
}

function reiniciarJogo() {
    location.reload();
}



