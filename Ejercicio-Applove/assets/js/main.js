// alert("hola");
var modal = document.getElementById('miModal');
var img = document.getElementById('01');
var modalImg = document.getElementById("img01");

function popUp(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img.addEventListener("click", popUp);

var borrar = document.getElementsByClassName("cerrar")[0];

function cerrar() {
    modal.style.display = "none";
}
borrar.addEventListener("click", cerrar);
