const canvas = document.getElementById('metaballs');
const ctx = canvas.getContext('2d');

let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const balls = [];

for (let i = 0; i < 12; i++) {
  balls.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    radius: 60 + Math.random() * 40,
    alpha: 0.4 + Math.random() * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  // Fondo base
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, width, height);

  // Modo compuesto para fusionar círculos
  ctx.globalCompositeOperation = 'lighter';

  balls.forEach(ball => {
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x < -ball.radius || ball.x > width + ball.radius) ball.vx *= -1;
    if (ball.y < -ball.radius || ball.y > height + ball.radius) ball.vy *= -1;

    const gradient = ctx.createRadialGradient(ball.x, ball.y, ball.radius * 0.3, ball.x, ball.y, ball.radius);
    gradient.addColorStop(0, `rgba(100, 100, 100, ${ball.alpha})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalCompositeOperation = 'source-over';
  requestAnimationFrame(animate);
}

animate();