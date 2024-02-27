let listaSpesa = ['banane', 'pane', 'cornetti', 'lamponi', 'boomerang', 'zaini', 'broccoli', 'sofficini', 'cappellini', 'pompelmi', 'calamari'];

const mainList = document.querySelector(".lista-spesa");

let max = 0;
while (!(max == listaSpesa.length)) {

  mainList.innerHTML += "<li>" + listaSpesa[max] + "</li>";

  max++;

  console.log (max);
}