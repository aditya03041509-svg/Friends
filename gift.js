const gift=document.getElementById("gift");

const btn=document.getElementById("openBtn");

const msg=document.getElementById("message");

btn.onclick=function(){

gift.classList.add("shake");

setTimeout(()=>{

gift.classList.remove("shake");

gift.classList.add("open");

confetti();

hearts();

msg.style.display="block";

btn.style.display="none";

},1500);

}

function confetti(){

for(let i=0;i<150;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

c.style.width="8px";

c.style.height="15px";

c.style.background=
`hsl(${Math.random()*360},100%,50%)`;

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="100vh";

c.style.transform=
`translateX(${Math.random()*300-150}px) rotate(720deg)`;

},50);

setTimeout(()=>{

c.remove();

},4500);

}

}

function hearts(){

for(let i=0;i<40;i++){

let h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.fontSize="30px";

h.style.left=Math.random()*100+"vw";

h.style.top="100vh";

h.style.transition="5s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.top="-100px";

},50);

setTimeout(()=>{

h.remove();

},5000);

}

}
