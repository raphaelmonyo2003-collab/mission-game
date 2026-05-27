const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const mainBox = document.getElementById("mainBox");
const questionsBox = document.getElementById("questionsBox");
const winnerBox = document.getElementById("winnerBox");

const submitBtn = document.getElementById("submitBtn");

const themeBtn = document.getElementById("themeBtn");

// Move NO button
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

// YES button
yesBtn.addEventListener("click", () => {

  mainBox.classList.add("hidden");

  setTimeout(() => {
    questionsBox.classList.remove("hidden");
  }, 400);

});

// FINAL BUTTON
submitBtn.addEventListener("click", () => {

  questionsBox.classList.add("hidden");

  winnerBox.classList.remove("hidden");

  // CONFETTI 🎊
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 }
  });

});

// THEME MODE
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeBtn.innerHTML = "☀️";
  }else{
    themeBtn.innerHTML = "🌙";
  }

});