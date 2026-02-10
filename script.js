const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");

noBtn.addEventListener("mouseover",()=>{
 const x=Math.random()*(window.innerWidth-100);
 const y=Math.random()*(window.innerHeight-50);
 noBtn.style.position="absolute";
 noBtn.style.left=x+"px";
 noBtn.style.top=y+"px";
});

let step=0;
yesBtn.addEventListener("click",()=>{
 step++;
 if(step===1) alert("Are you sure? 🤭");
 else if(step===2) alert("Really really sure? 😏");
 else if(step===3) alert("Think again… my heart is waiting 💓");
 else window.location.href="love.html";
});

const hearts=document.querySelector(".hearts");
setInterval(()=>{
 const span=document.createElement("span");
 span.innerHTML="💖";
 span.style.left=Math.random()*100+"vw";
 span.style.animationDuration=3+Math.random()*3+"s";
 hearts.appendChild(span);
 setTimeout(()=>span.remove(),6000);
},300);
