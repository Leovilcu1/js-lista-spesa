const lista = ["Pane", "Latte","Zucchero","Acqua"];
console.log(typeof lista)
let i = 0;
const ul = document.querySelector("ul");

while(i < lista.length){
    console.log(lista[i]);
    ul.innerHTML +=`<li>${lista[i]}</li>`;
    i++;
}