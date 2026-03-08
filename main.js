document.addEventListener('DOMContentLoaded', () => {
  console.log('Adriana & Diego - Wedding Landing Page Initialized');

  // Subtle parallax effect for the portrait
  const portrait = document.querySelector('.couple-portrait img');
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const moveX = (clientX / innerWidth - 0.5) * 20;
    const moveY = (clientY / innerHeight - 0.5) * 20;

    if (portrait) {
      portrait.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
    }
  });

  // Countdown Timer
  const countdownDate = new Date('2026-04-11T15:00:00-05:00').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const format = (num) => String(num).padStart(2, '0');

    if (document.getElementById('days')) {
      document.getElementById('days').innerText = format(days);
      document.getElementById('hours').innerText = format(hours);
      document.getElementById('minutes').innerText = format(minutes);
      document.getElementById('seconds').innerText = format(seconds);
    }

    if (distance < 0) {
      clearInterval(countdownInterval);
      if (document.querySelector('.countdown-timer-pill')) {
        document.querySelector('.countdown-timer-pill').innerHTML = "¡HOY ES EL GRAN DÍA!";
      }
    }
  };

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Background Music Logic
  const music = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');

  const startMusic = () => {
    if (music && music.paused) {
      music.play().then(() => {
        if (musicToggle) musicToggle.classList.add('playing');
        // Once music starts, remove these listeners
        document.removeEventListener('click', startMusic);
        document.removeEventListener('scroll', startMusic);
        document.removeEventListener('touchstart', startMusic);
      }).catch(err => {
        console.log('Autoplay blocked. User interaction required.', err);
      });
    }
  };

  // Multiple events to catch user interest
  document.addEventListener('click', startMusic);
  document.addEventListener('scroll', startMusic);
  document.addEventListener('touchstart', startMusic);

  if (musicToggle) {
    musicToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering startMusic if it hasn't fired yet
      if (music.paused) {
        music.play();
        musicToggle.classList.add('playing');
      } else {
        music.pause();
        musicToggle.classList.remove('playing');
      }
    });
  }
});
