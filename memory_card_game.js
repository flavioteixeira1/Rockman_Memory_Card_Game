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
    case caminho = "imagens/DrWily3.jpg" :
        numero = 0;
        break;
    case caminho = "imagens/cutman_v2.jpeg":
        numero = 1;
        break;
    case caminho = "imagens/gutsman.jpg":
        caminho = 2;
        break;
    case caminho = "imagens/Elecman.jpg":
        caminho = 3;
        break;
    case caminho = "imagens/iceman_v1.jpeg":
        numero = 4;
        break;
    case caminho = "imagens/fireman.jpg":
        numero = 5;
        break;
    case caminho = "imagens/bombman.jpg" :
        numero = 6;
        break;
    case caminho = "imagens/roll.png":
        numero = 7;
        break;
    case caminho = "imagens/Dr_Light_v2.jpeg":
        numero = 8;
        break;
    case caminho = "imagens/Megaman.png":
        numero = 9;
        break;
  }
  return numero;

}


function caminho_figura(cor_numero){
    let caminho = "";
    switch(cor_numero){
        case 0:
            caminho = "imagens/DrWily3.jpg";
            break;
        case 1:
            caminho = "imagens/cutman_v2.jpeg";
            break;
        case 2:
            caminho = "imagens/gutsman.jpg";
            break;
        case 3:
            caminho = "imagens/Elecman.jpg";
            break;
        case 4:
            caminho = "imagens/iceman_v1.jpeg";
            break;
        case 5:
            caminho = "imagens/fireman.jpg";
            break;
        case 6:
            caminho = "imagens/bombman.jpg";
            break;
        case 7:
            caminho = "imagens/roll.png";
            break;
        case 8: 
            caminho = "imagens/Dr_Light_v2.jpeg";
            break;
        case 9:
            caminho = "imagens/Megaman.png";
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
  tentativas--;
  aparecer();
  revelar_carta(idcarta);
  document.getElementById("pontuacao").innerHTML = " " + pontos;
  document.getElementById("tentativas").innerHTML = " " + tentativas;
  setTimeout(function(){document.getElementById(idcarta).src = "imagens/fundo_carta.jpeg"},380);
  atualizar();
}

function acertar(idcarta){
  pontos ++;
  cartas_reveladas.push(idcarta);
  aparecer_desaparecer();
  revelar_carta(idcarta);
  document.getElementById("pontuacao").innerHTML = " "+pontos;
  document.getElementById("tentativas").innerHTML = " "+tentativas;
  atualizar();

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

  setTimeout(function(){girar_todas()},150);
  //girar as cartas
  
  //voltar as cartas para o fundo padrão
  setTimeout(function(){esconder_imagens_cartas()},1500);
}
}

function esconder_imagens_cartas(){
 
  for (let cc = 0; cc <= 12;cc++){
    //document.getElementsByClassName('p2')[0].src = "imagens/fundo_carta.jpeg";
    document.getElementsByClassName('p2')[cc].src = "imagens/fundo_carta.jpeg";
    //document.getElementsByClassName('p2')[cc].setAttribute('src',"imagens/fundo_carta.jpeg");
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
    
    if (acertos >= 12 || tentativas <= 0) {
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
  //document.getElementsByClassName('p2')[0].className += ' carta-girando-x ';
  document.getElementsByClassName('p2')[a].className += ' carta-girando-x ';
  //setTimeout(()=>{document.getElementsByClassName('carta-girando-x')[0].className ='p2'},1000);
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