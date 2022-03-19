function calculoMedia() {
  var valorNome = document.getElementById("nomePessoa")
  var nome = valorNome.value
  console.log(nome)
  
  var notaPrimeiroBimestre = parseFloat(document.getElementById("notaPrimeiroBi").value)
  
  var valorNotaSegundoBimestre = document.getElementById("notaSegundoBi")
  var notaSegundoBimestre = parseFloat(valorNotaSegundoBimestre.value)
  
  var valorNotaTerceiroBimestre = document.getElementById("notaTerceiroBi")
  var notaTerceiroBimestre = parseFloat(valorNotaTerceiroBimestre.value)
  
  var valorNotaQuartoBimestre = document.getElementById("notaQuartoBi")
  var notaQuartoBimestre = parseFloat(valorNotaQuartoBimestre.value)
  
  var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre)/4;

var notaFixada = notaFinal.toFixed(1);

if (notaFinal>6)
  {
    var valorMedia = "Parabéns, " + nome + "! Você passou com média " + notaFixada;
  elementoValorMedia.innerHTML = valorMedia;
}
else
  {
    var valorMedia = "Infelizmente você não passou, " + nome + ". Sua média foi  " + notaFixada;
  elementoValorMedia.innerHTML = valorMedia;
  }
}
// Comentario
// Revisão
// Variaveis, strings, console.log, toFixed, operacoes matematicas, concatenacão
