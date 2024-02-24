function spinAndRedirect() {
  const logo = document.getElementById('logo');
  logo.style.transition = 'transform 1s';
  logo.style.transform = 'rotate(360deg)';
  setTimeout(() => {
      window.location.href = 'https://ripples.ltd';
  }, 1000); // Wait for the rotation animation to finish
}

// Simulated game data (replace this with real data from a database or API)
const games = [
  { name: 'Prisoners Dilemma', image: 'https://th.bing.com/th/id/OIP.R5EV8zLOIVML0RpKpXoSyAHaEK?rs=1&pid=ImgDetMain', url: '1.html' },
  { name: 'Christmas Matching', image: 'https://th.bing.com/th/id/OIP.APjDZ0hpOsnvw1vdvxyiQwHaKe?rs=1&pid=ImgDetMain', url: '2.html' },
  { name: 'snake(computer)', image: 'https://th.bing.com/th/id/OIP.3YhJp0_rp77XlltFgkgBeAHaNK?rs=1&pid=ImgDetMain', url: '3.html' },
  { name: 'easy-breakout(computer)', image: 'https://images.crazygames.com/ataribreakout.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop', url: '4.html' },
  { name: 'the backrooms(mobile)', image: 'https://th.bing.com/th/id/OIP.7jkTgWMUi_C7N5DNiy0Y8wHaD4?rs=1&pid=ImgDetMain', url: '5.html' },
  { name: 'Coming Later', image: '', url: '6.html' },
  { name: 'Coming Later', image: '', url: '7.html' },
  { name: 'Coming Later', image: '', url: '8.html' },
  { name: 'Coming Later', image: '', url: '9.html' },
  // Add more game objects with names, image paths, and URLs
];

function displayGames() {
  const gamesContainer = document.getElementById('gamesContainer');
  gamesContainer.innerHTML = '';

  games.forEach(game => {
      const gameElement = document.createElement('div');
      gameElement.classList.add('game');
      gameElement.addEventListener('click', () => {
          window.location.href = game.url;
      });

      const image = document.createElement('img');
      image.src = game.image;
      image.alt = game.name;

      const name = document.createElement('h3');
      name.textContent = game.name;

      gameElement.appendChild(image);
      gameElement.appendChild(name);
      gamesContainer.appendChild(gameElement);
  });
}

displayGames();
