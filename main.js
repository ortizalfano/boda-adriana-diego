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

});
