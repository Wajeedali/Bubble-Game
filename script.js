var timer = 60;
var score = 0;
var rn = null;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
  rn = Math.floor(Math.random()*10)
  document.getElementById("hitVal").textContent = rn;
}

function makeBubble(){
var clutter = "";

for (var i = 1; i<=96; i++){
  clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
  var timerID = setInterval(()=>{
    if (timer>0){
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    }else{
      clearInterval(timerID);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over !!!</h1>`;
    }
  },1000)
}

document.querySelector("#pbtm").addEventListener('click', (details)=>{
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === rn){
    increaseScore()
    makeBubble()
    getNewHit()
  }
})

runTimer()
makeBubble()
getNewHit()
