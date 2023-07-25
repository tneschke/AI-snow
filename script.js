document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  const bottom = document.createElement('div');
  bottom.classList.add('bottom');
  document.body.appendChild(bottom);
  document.body.appendChild(container);

  //  Generate snowflakes
for (let i = 0; i < 2000; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  const sizeFactor = Math.pow(Math.random(), 2) * Math.pow(Math.random(), 2) * Math.pow(Math.random(), 2); // Exponential distribution (more small snowflakes)
  const size = sizeFactor * 30 + 2; // Random size between 1 and 21 pixels
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.top = `${Math.random() * 100}vh`;
  container.appendChild(snowflake);
}

  // Animate snowflakes
let animationCounter = 0;
setInterval(() => {
  for (const snowflake of container.children) {
    const speed = parseFloat(snowflake.style.height) * 0.03; // Speed proportional to size
    const sizeFactor = parseFloat(snowflake.style.height) / 31; // Normalize size factor (0 to 1)
    const windMagnitude = Math.sin(animationCounter * 0.01) * (0.29 * sizeFactor); // Wind magnitude with sine wave function
    snowflake.style.top = `${(parseFloat(snowflake.style.top) + speed) % 100}vh`;
    snowflake.style.left = `${(parseFloat(snowflake.style.left) + windMagnitude) % 100}vw`;
  }
  animationCounter++;
}, 50);
});
