function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKmNumerico = parseFloat(valor);
  console.log(valorEmKmNumerico);

  var valorEmAnosLuz = valorEmKmNumerico / 9.461e+12;
  console.log(valorEmAnosLuz);
    
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado é de " + valorEmAnosLuz + " anos-luz";
  elementoValorConvertido.innerHTML = valorConvertido;
}