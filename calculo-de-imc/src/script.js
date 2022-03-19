function calculoIMC() {
  
  var elementoPeso = parseFloat(document.getElementById("peso").value)
  
  var elementoAltura = parseFloat(document.getElementById("altura").value)
  
  var imc = (elementoPeso / (elementoAltura*elementoAltura)).toFixed(1)
  
  var resposta = "Seu IMC é " + imc
  resultado.innerHTML = resposta
  
  if (imc > 40.0) {
    var indice = document.getElementById("classificacao")
    classificacao.innerHTML = "Classificação: Obesidade grave"
  } else if (imc > 30) {
    var indice = document.getElementById("classificacao")
    classificacao.innerHTML = "Classificação: Obesidade"
  } else if (imc > 25) {
    var indice = document.getElementById("classificacao")
    classificacao.innerHTML = "Classificação: Sobrepeso"
  } else if (imc > 18.5) {
    var indice = document.getElementById("classificacao")
    classificacao.innerHTML = "Classificação: Normal"
  } else {
    var indice = document.getElementById("classificacao")
    classificacao.innerHTML = "Classificação: Abaixo do peso"
  }
}