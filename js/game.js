const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
  x: 150,
  y: 100,
  color: 'cyan'
};

function draw() {
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, 10, 10);
}

function update() {
  draw();
  requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') player.x -= 5;
  if (e.key === 'ArrowRight') player.x += 5;
  if (e.key === 'ArrowUp') player.y -= 5;
  if (e.key === 'ArrowDown') player.y += 5;
});

update();
