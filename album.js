function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("preview").src=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}

function playQuiz(){

window.location.href="quiz.html";

}