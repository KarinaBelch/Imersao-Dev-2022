var cartaWinx1 = {
  nome: "Flora",
  imagem:
    "https://i.pinimg.com/736x/41/7a/cf/417acf2fc78c2e8c791adbe78317f561.jpg",
  atributos: { ataque: 5, defesa: 6, magia: 9 }
};
var cartaWinx2 = {
  nome: "Bloom",
  imagem:
    "https://www.winxclub.com/sites/default/files/galleria/immagine-corpo-2_19.jpg",
  atributos: { ataque: 8, defesa: 5, magia: 6 }
};
var cartaWinx3 = {
  nome: "Tecna",
  imagem:
    "https://i.pinimg.com/originals/b5/64/3b/b5643b74c4d4b97191a81eb7e892b44d.jpg",
  atributos: { ataque: 6, defesa: 8, magia: 3 }
};
var cartaWinx4 = {
  nome: "Stella",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMY5miXx1j7ymtwsIaG9ChmYYaJWoPiryQM4EyL5Yp6jHC3NZ0ArmfIdYEkEPy2y9rqY&usqp=CAU",
  atributos: { ataque: 9, defesa: 6, magia: 4 }
};
var cartaWinx5 = {
  nome: "Aisha",
  imagem:
    "https://uploads.spiritfanfiction.com/historias/capitulos/201912/winx-club--o-segredo-das-fadas-ll-18215555-311220191918.jpg",
  atributos: { ataque: 7, defesa: 10, magia: 2 }
};

var cartaInimiga1 = {
  nome: "Stormy",
  imagem:
    "https://i.pinimg.com/originals/9d/a3/be/9da3bec7deaf31476bd7619c62a95381.jpg",
  atributos: { ataque: 7, defesa: 3, magia: 10 }
};
var cartaInimiga2 = {
  nome: "Darcy",
  imagem:
    "https://i.pinimg.com/236x/80/2d/34/802d345eb46198470beabf8ec4c0d5d5--trix-winx-club.jpg",
  atributos: { ataque: 4, defesa: 9, magia: 6 }
};
var cartaInimiga3 = {
  nome: "Icy",
  imagem:
    "https://i.pinimg.com/originals/36/24/f2/3624f2d0f28b59e39af6938537635c9c.png",
  atributos: { ataque: 4, defesa: 9, magia: 6 }
};

var cartasWinx = [cartaWinx1, cartaWinx2, cartaWinx3, cartaWinx4, cartaWinx5];
var cartasInimigas = [cartaInimiga1, cartaInimiga2, cartaInimiga3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartasInimigas[numeroCartaMaquina];
  var numeroCartaJogador = parseInt(Math.random() * 5);
  cartaJogador = cartasWinx[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
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

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu</p>";
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  }

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnNovoJogo").disabled = false;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function jogarNovamente() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = "";
  divCartaMaquina.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = "";
  divCartaJogador.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnNovoJogo").disabled = true;
}