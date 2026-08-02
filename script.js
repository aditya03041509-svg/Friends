const text="A true friend is the greatest gift of life ❤️";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

function nextPage(){

window.location.href="album.html";

}