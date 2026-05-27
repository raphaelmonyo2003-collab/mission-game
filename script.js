const loadingScreen = document.getElementById("loadingScreen");
const mainContent = document.getElementById("mainContent");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const mainBox = document.getElementById("mainBox");
const questionsBox = document.getElementById("questionsBox");
const winnerBox = document.getElementById("winnerBox");

const submitBtn = document.getElementById("submitBtn");

const themeBtn = document.getElementById("themeBtn");

const typingText = document.querySelector(".typing-text");

// TYPING EFFECT
const text = "🎮 MISSION REQUEST";
let index = 0;

function typeEffect(){

  if(index < text.length){

    typingText.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);
  }

}

// HACKING SCREEN
setTimeout(() => {

  loadingScreen.style.display = "none";

  mainContent.classList.remove("hidden");

  typeEffect();

}, 3500);

// MOVE BUTTON
function moveButton(){

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("click", moveButton);

// YES BUTTON
yesBtn.addEventListener("click", () => {

  mainBox.classList.add("hidden");

  setTimeout(() => {

    questionsBox.classList.remove("hidden");

  }, 300);

});

// COMPLETE BUTTON
submitBtn.addEventListener("click", () => {

  questionsBox.classList.add("hidden");

  winnerBox.classList.remove("hidden");

  confetti({
    particleCount:250,
    spread:120,
    origin:{ y:0.6 }
  });

});

// DARK MODE
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeBtn.innerHTML = "☀️";
  }else{
    themeBtn.innerHTML = "🌙";
  }

});