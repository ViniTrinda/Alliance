var menu = document.getElementById("links");
var bars = document.getElementById("bars");


//barras
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');


bars.addEventListener('click', ()=>{
     menu.classList.toggle('menu-active')//toggle, vem de alternar, se tiver a class, tira, se não tiver, adiciona.

     b1.classList.toggle('b1-active');
     b2.classList.toggle('b2-active');
     b3.classList.toggle('b3-active');
})