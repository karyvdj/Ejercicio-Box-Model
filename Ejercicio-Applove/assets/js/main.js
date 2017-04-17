// alert("hola");
var modal = document.getElementById('miModal');
var img = document.getElementsByClassName('img');
var imgProducto = document.getElementById("img01");

for(i=0; i< img.length; i++){
  img[i].addEventListener("click", popUp);
}

function popUp(){
    modal.style.display = "block";
    imgProducto.src = this.src;
}

var borrar = document.getElementsByClassName("cerrar")[0];

function cerrar() {
    modal.style.display = "none";
}
borrar.addEventListener("click", cerrar);
