function createHearts() {
  const body = document.body;
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    body.appendChild(heart);
  }
}

window.onload = createHearts();
