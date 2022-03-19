var listaFilmes = [
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27207532.jpg%27&ImageUrl=%27207532.jpg%27&EntityType=%27Item%27&EntityId=%2715926%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
  "https://i.pinimg.com/236x/e5/87/be/e587be3c42f3af392db81996f3884068.jpg",
  "https://leiturafilmica.com.br/wp-content/uploads/2021/07/o-poderoso-chefao-poster.png",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/33/59/20140728.jpg",
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/3/132720180226-uau-posters-filmes-divertidamente-divertida-mente-inside-out.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
  "https://www.cafecomfilme.com.br/media/k2/items/cache/45a827496a0a9e507735bf02f1278469_XL.jpg?t=20160827_214748",
  "https://i.pinimg.com/236x/e3/c1/da/e3c1da4e7bad81088731a8068908c1f5.jpg"
];
var linkFilmes = [
  "https://www.youtube.com/watch?v=lARFBFxjLNI",
  "https://www.youtube.com/watch?v=TiaxfJ7QrIo",
  "https://www.youtube.com/watch?v=SaHZHU-44XA",
  "https://www.youtube.com/watch?v=AGACeWVdFqo",
  "https://www.youtube.com/watch?v=ukQeR3zYncw",
  "https://www.youtube.com/watch?v=VyHV0BRtdxo",
  "https://www.youtube.com/watch?v=1ZdlAg3j8nI",
  "https://www.youtube.com/watch?v=wr6N_hZyBCk"
];

// Gerando todas as imagens pré-definidas
for (var i = 0; i < listaFilmes.length; i++) {
  const lista = document.getElementById("listaFilmes");
  lista.innerHTML +=
    "<a href='" +
    linkFilmes[i] +
    "' target='_blank' rel='noopener noreferrer'>" +
    '<img class="capas" src=' +
    listaFilmes[i] +
    ">" +
    "</a>";
}

function Adicionar() {
  // Variáveis digitadas pelo usuario
  var campoFilme = document.getElementById("adicionar").value;
  var campoLink = document.getElementById("adicionarLink").value;

  // Empurrando as variaveis para dentro da lista
  listaFilmes.push(campoFilme);
  linkFilmes.push(campoLink);

  // Estrutura para unir as variáveis digitadas em formato HTML
  var elementoFilme =
    "<a href='" +
    campoLink +
    "' target='_blank' rel='noopener noreferrer'>" +
    '<img class="capas" src=' +
    campoFilme +
    ">" +
    "</a>";

  // Mandando a variável transformada em HTML para o elemento "listaFilmes" do HTML
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoFilme;

  // Limpando as caixas de escrita
  document.getElementById("adicionar").value = "";
  document.getElementById("adicionarLink").value = "";
}