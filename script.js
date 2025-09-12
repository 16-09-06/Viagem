const countdownElement = document.getElementById("countdown");
const flightDate = new Date("2025-09-19T00:00:00").getTime();

// Contador regressivo
function updateCountdown() {
  const now = new Date().getTime();
  const distance = flightDate - now;

  if (distance <= 0) {
    countdownElement.textContent = "Chegou o dia! 🎉💖";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Corações caindo
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

// Carrossel automático de fotos
const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function showNextImage() {
  images.forEach((img, i) => img.classList.remove("active"));
  images[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % images.length;
}

// Inicializa carrossel
showNextImage();
setInterval(showNextImage, 3000);
