var carta1 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/04/demon-slayer-tanjiro-dance-of-the-fire-god-1199310-1280x0-1-768x431.jpeg",
  nome: "Tanjiro Kamado",
  atributos: {
    ataque: 6,
    defesa: 5,
    magia: 8
  }
};

var carta2 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/04/20b6fb37d74a748fd36c3e86bfbc89a5-768x432.jpg",
  nome: "Zenitsu Agatsuma",
  atributos: {
    ataque: 4,
    defesa: 3,
    magia: 7
  }
};

var carta3 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/04/Inosuke-Hashibira-doa-mascaras-a-Escola-de-Enfermagem-768x432.jpg",
  nome: "Inosuke Hashibira",
  atributos: {
    ataque: 7,
    defesa: 4,
    magia: 4
  }
};

var carta4 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2020/09/Screenshot_13-1-768x428.jpg",
  nome: "Giyuu Tomioka",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 9
  }
};

var carta5 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2020/09/Screenshot_12-2-768x511.jpg",
  nome: "Kyojuro Rengoku",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 8
  }
};

var carta6 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2020/09/Screenshot_10-7-768x444.jpg",
  nome: "Tengen Uzui",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 5
  }
};

var carta7 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2020/09/Screenshot_11-6-768x431.jpg",
  nome: "Shinobu Kocho",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 10
  }
};

var carta8 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2020/09/Muzan_encountering_Tanjiro-768x432.jpg",
  nome: "Muzan Kibutsuji",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var carta9 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/04/Muzan-Kibutsuji-and-Kagaya-Ubuya-768x432.jpg",
  nome: "Kagaya Ubuyashiki",
  atributos: {
    ataque: 3,
    defesa: 2,
    magia: 8
  }
};

var carta10 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/04/Yoriichi_colored_body-768x903.jpg",
  nome: "Yoriichi Tsugikuni",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
var cartaMaquina;
var cartaJogador;

var cartasDoJogador = [];
var cartasDaMaquina = [];

function sortearCarta() {
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogar = document.getElementById("btnJogar");

  var numeroCartaDaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaDaMaquina];

  var numeroCartaDoJogador = parseInt(Math.random() * 10);

  while (numeroCartaDaMaquina == numeroCartaDoJogador) {
    numeroCartaDoJogador = parseInt(Math.random() * 10);
  }

  cartaJogador = cartas[numeroCartaDoJogador];
  console.log(cartaJogador);

  botaoSortear.disabled = true;
  botaoJogar.disabled = false;

  exibirCartaJogador();
}

function exibirCartaJogador() {
  var card = document.getElementById("opcoes");
  var cardTexto = "";

  cardTexto += `
    <div class="cartao">
      <img class="cartao__imagem" src="${cartaJogador.imagem}" alt="">
      <div class="cartao__info" id="cartao-info">
        <p>${cartaJogador.nome}</p>

      </div>
    </div>
  `;

  card.innerHTML = cardTexto;

  exibeOpcoes();
}

function exibeOpcoes() {
  var opcoes = document.getElementById("cartao-info");
  var opcoesTexto = `<p class="info__titulo">${cartaJogador.nome}</p>`;

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `
      <div class="info__atributos">
        <label class="atributo">
          <input type="radio" name="atributo" value="${atributo}" checked> 
          ${atributo}
        </label>
        <p class="atributo__valor">${cartaJogador.atributos[atributo]}</p>
      </div>
    `;
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var botaoJogar = document.getElementById("btnJogar");

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `<p>O atributo selecionado foi ${atributoSelecionado}. Você venceu. Parabéns! Vamos para a próxima rodada.`;
    cartasDoJogador.push(cartaMaquina);
  } else if (valorCartaJogador === valorCartaMaquina) {
    elementoResultado.innerHTML = `<p>O atributo selecionado foi ${atributoSelecionado}. Você empatou. Vamos para a próxima rodada.`;
  } else {
    elementoResultado.innerHTML = `<p>O atributo selecionado foi ${atributoSelecionado}. Você perdeu. Que pena! Vamos para a próxima rodada.`;
    cartasDaMaquina.push(cartaJogador);
  }

  if (cartasDaMaquina.length == 5 || cartasDoJogador.length == 5) {
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnJogarNovamente").disabled = true;
    document.getElementById("btnSortear").disabled = true;

    if (cartasDaMaquina.length == 5) {
      elementoResultado.innerHTML = `<p>Fim do jogo. O vencedor foi a máquina por ${cartasDaMaquina.length} a ${cartasDoJogador.length} pontos.`;
      document.getElementById("divBotaoReiniciar").innerHTML = `
      <button type="button" onclick=reiniciar()>Reiniciar</button>
    `;
    } else {
      elementoResultado.innerHTML = `<p>Fim do jogo. O vencedor foi você por ${cartasDoJogador.length} a ${cartasDaMaquina.length}.`;
      document.getElementById("divBotaoReiniciar").innerHTML = `
      <button type="button" onclick=reiniciar()>Reiniciar</button>
    `;
    }
  } else {
    document.getElementById("btnJogarNovamente").disabled = false;
  }

  botaoJogar.disabled = true;

  exibeCards();
  exibePontuacao();
}

function exibeCards() {
  var card = document.getElementById("opcoes");
  var cardTexto = "";
  cardTexto += `<div class="cartao">
      <img class="cartao__imagem" src="${cartaJogador.imagem}" alt="">
      <div class="cartao__info cartao__info--novo" id="cartao-info">
        <p class="info__titulo">${cartaJogador.nome}</p>
        <div>
          <p>ATAQUE</p>
          <p>${cartaJogador.atributos["ataque"]}</p>
        </div>
        <div>
          <p>DEFESA</p>
          ${cartaJogador.atributos["defesa"]}
        </div>
        <div>
          <p>MAGIA</p>
          ${cartaJogador.atributos["magia"]}
        </div>
      </div>
    </div>
  `;

  cardTexto += `
    <div class="cartao">
      <img class="cartao__imagem" src="${cartaMaquina.imagem}" alt="">
      <div class="cartao__info cartao__info--novo" id="cartao-info">
        <p class="info__titulo">${cartaMaquina.nome}</p>
        <div>
          <p>ATAQUE</p>
          <p>${cartaMaquina.atributos["ataque"]}</p>
        </div>
        <div>
          <p>DEFESA</p>
          <p>${cartaMaquina.atributos["defesa"]}</p>
        </div>
        <div>
          <p>MAGIA</p>
          <p>${cartaMaquina.atributos["magia"]}</p>
        </div>
      </div>
    </div>
  `;

  card.innerHTML = cardTexto;
}

function jogarNovamente() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var elementoResultado = document.getElementById("resultado");
  var card = document.getElementById("opcoes");

  cartaJogador = "";
  cartaMaquina = "";
  elementoResultado.innerHTML = "";
  card.innerHTML = "";

  botaoJogar.disabled = true;
  botaoSortear.disabled = false;
  botaoJogarNovamente.disabled = true;

  sortearCarta();
}

function exibePontuacao() {
  var pontuacao = document.getElementById("pontuacao");

  pontuacao.innerHTML = `<span>Jogador: ${cartasDoJogador.length}</span> <span>Máquina: ${cartasDaMaquina.length}</span>`;
}

function reiniciar() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var elementoResultado = document.getElementById("resultado");
  var card = document.getElementById("opcoes");
  var pontuacao = document.getElementById("pontuacao");
  var divBotao = document.getElementById("divBotaoReiniciar");

  cartaJogador = "";
  cartaMaquina = "";
  elementoResultado.innerHTML = "";
  card.innerHTML = "";
  pontuacao.innerHTML = "";
  divBotao.innerHTML = "";

  cartasDaMaquina = [];
  cartasDoJogador = [];

  botaoJogar.disabled = true;
  botaoSortear.disabled = false;
  botaoJogarNovamente.disabled = true;
}