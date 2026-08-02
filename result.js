setInterval(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

},600);