function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  console.log(valorEmEuroNumerico);

  var valorEmEuro = valorEmEuroNumerico * 0.91;

  var elementoValorConvertidoEuro = document.getElementById("valorConvertido");
  var valorConvertidoEuro = "O resultado em euro é $" + valorEmEuro;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}
