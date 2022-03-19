var elementoResultado = document.getElementById("resultado");
var numeroSecreto;
var tentativas;
novoNumero();
var tentar = document.getElementById("tentativas");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(tentativas);
  console.log(numeroSecreto);
  if (tentativas > 1) {
    if (chute == numeroSecreto) {
      this.elementoResultado.innerHTML = "Você acertou!";
      tentar.innerHTML = "";
      tentarNovamente();
    } else if (chute > 10 || chute < 0) {
      this.elementoResultado.innerHTML = "Digite um numero entre 0 e 10";
    } else if (chute > numeroSecreto) {
      this.elementoResultado.innerHTML =
        "Você errou, o numero secreto é MENOR que o numero chutado";
      tentativas--;
      tentar.innerHTML = "Você tem mais " + tentativas + " tentativas";
    } else {
      this.elementoResultado.innerHTML =
        "Você errou, o numero secreto é MAIOR que o numero chutado";
      tentativas--;
      tentar.innerHTML = "Você tem mais " + tentativas + " tentativas";
    }
  } else {
    tentativas--;
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    tentar.innerHTML = "";
    elementoResultado.innerHTML =
      "Suas tentativas acabaram. O número que eu pensei era " +
      this.numeroSecreto;
    tentarNovamente();
  }
}

function tentarNovamente() {
  var novo = document.getElementById("novoBotao");
  novo.innerHTML =
    "<button type='submit' onclick='novoNumero()'>Jogar novamente!</button>";
}

function novoNumero() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  var tentar = document.getElementById("tentativas");
  tentar.innerHTML = " Você tem " + tentativas + " tentativas";
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  document.getElementById("novoBotao").innerHTML = "";
}
