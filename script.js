const button = document.getElementById("celebrateBtn");
const wishAudio = document.getElementById("wishAudio");
const confettiAudio = document.getElementById("confettiAudio");

function celebrate(){

confettiAudio.currentTime = 0;
confettiAudio.play();

for(let i=0;i<3;i++){
setTimeout(()=>{

confetti({
particleCount:100,
spread:70,
origin:{y:0.6}
});

},i*400);
}

wishAudio.play();
}

button.addEventListener("click",celebrate);