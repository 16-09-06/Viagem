// script.js

// --- LÓGICA DO CRONÔMETRO ---
const countdownElement = document.getElementById("countdown");
const tripDate = new Date("2025-09-19T00:00:00").getTime(); // Defina a data e hora da viagem

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = tripDate - now;

  // Se a contagem regressiva terminou
  if (distance < 1000) { // Usamos < 1000ms para pegar o último segundo
    clearInterval(countdownInterval);
    countdownElement.innerHTML = `
      <div>0<span>dias</span></div>
      <div>0<span>horas</span></div>
      <div>0<span>minutos</span></div>
      <div>0<span>segundos</span></div>
    `;
    // Aguarda um segundo para mostrar o zero antes de exibir a mensagem final
    setTimeout(() => {
      countdownElement.innerHTML = "<h2>Chegou o grande dia! Nossa aventura começa agora. Te amo! ❤️✈️</h2>";
    }, 1000);
  } else {
    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com id="countdown"
    countdownElement.innerHTML = `
      <div>${days}<span>dias</span></div>
      <div>${hours}<span>horas</span></div>
      <div>${minutes}<span>minutos</span></div>
      <div>${seconds}<span>segundos</span></div>
    `;
  }
}, 1000);

// --- LÓGICA DA GALERIA (SLIDESHOW) ---
const galleryImages = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function startSlideshow() {
  if (galleryImages.length === 0) return;

  // Mostra a primeira imagem imediatamente
  galleryImages[currentImageIndex].classList.add('active');

  setInterval(() => {
    // Remove a classe 'active' da imagem atual
    galleryImages[currentImageIndex].classList.remove('active');

    // Calcula o índice da próxima imagem
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

    // Adiciona a classe 'active' para a próxima imagem
    galleryImages[currentImageIndex].classList.add('active');
  }, 4000); // Muda de imagem a cada 4 segundos
}

// Inicia o slideshow quando a página carrega
startSlideshow();
