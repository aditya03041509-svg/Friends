const questions = [

{
question:"What is my favourite color?",
answer:"blue"
},

{
question:"What is my nickname?",
answer:"ammu"
},

{
question:"Favourite food?",
answer:"pizza"
},

{
question:"Favourite movie?",
answer:"kgf"
},

{
question:"Favourite game?",
answer:"cricket"
},

{
question:"Favourite city?",
answer:"lucknow"
},

{
question:"Best friend's name?",
answer:"rahul"
},

{
question:"Favourite season?",
answer:"winter"
},

{
question:"Favourite drink?",
answer:"coffee"
},

{
question:"Favourite fruit?",
answer:"mango"
}

];

let current=0;

let correct=0;

let wrong=0;

let time=56;

loadQuestion();

function loadQuestion(){

document.getElementById("question").innerHTML=

(current+1)+". "+questions[current].question;

document.getElementById("answer").value="";

time=56;

document.getElementById("timer").innerHTML=time;

document.getElementById("progressBar").style.width=

((current)/questions.length)*100+"%";

}

let timer;

function startTimer(){

clearInterval(timer);

time = 56;

document.getElementById("timer").innerHTML = time;

timer = setInterval(() => {

time--;

document.getElementById("timer").innerHTML = time;

if(time <= 0){

clearInterval(timer);

wrong++;

nextQuestion();

}

},1000);

}

function submitAnswer(){

let ans=document.getElementById("answer").value.toLowerCase().trim();

if(ans==questions[current].answer){

correct++;

}else{

wrong++;

}

nextQuestion();

}
clearInterval(timer);
function nextQuestion(){

current++;

if(current==questions.length){

    clearInterval(timer);

    const player = document.getElementById("playerName").value || "Guest";

    const result = {
        player: player,
        correct: correct,
        wrong: wrong,
        date: new Date().toLocaleString()
    };

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push(result);

    localStorage.setItem("history", JSON.stringify(history));

    localStorage.setItem("correct", correct);
    localStorage.setItem("wrong", wrong);
    localStorage.setItem("player", player);

    window.location = "result.html";
}
return;

}

loadQuestion();
startTimer();

