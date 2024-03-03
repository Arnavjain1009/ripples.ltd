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
  { name: 'Tetris(mobile)', image: 'https://cdn.dribbble.com/users/2475489/screenshots/9239848/media/ff48675e4dd24c950af1dda5ac3c6019.gif', url: '6.html' },
  { name: 'r9gpt beta', image: 'https://th.bing.com/th/id/OIP.eehDXMZDLI5VUyJAchbiqQHaEQ?w=1392&h=800&rs=1&pid=ImgDetMain', url: '7.html' },
  { name: 'tetris (computer)', image: 'https://cdn.dribbble.com/users/2475489/screenshots/9239848/media/ff48675e4dd24c950af1dda5ac3c6019.gif', url: '8.html' },
  { name: 'Coming Later', image: '', url: '9.html' },
  { name: 'test tetris', image: '', url: '10.html' },
  { name: 'Coming Later', image: '', url: '11.html' },
  { name: 'Coming Later', image: '', url: '12.html' },
  { name: 'Coming Later', image: '', url: '13.html' },
  { name: 'Coming Later', image: '', url: '14.html' },
  { name: 'Coming Later', image: '', url: '15.html' },
  { name: 'Coming Later', image: '', url: '16.html' },
  { name: 'Coming Later', image: '', url: '17.html' },
  { name: 'Coming Later', image: '', url: '18.html' },
  { name: 'Coming Later', image: '', url: '19.html' },
  { name: 'Coming Later', image: '', url: '20.html' },
  { name: 'Coming Later', image: '', url: '21.html' },
  { name: 'Coming Later', image: '', url: '22.html' },
  { name: 'Coming Later', image: '', url: '23.html' },
  { name: 'Coming Later', image: '', url: '24.html' },
  { name: 'Coming Later', image: '', url: '25.html' },
  { name: 'Coming Later', image: '', url: '26.html' },
  { name: 'Coming Later', image: '', url: '27.html' },
  { name: 'Coming Later', image: '', url: '28.html' },
  { name: 'Coming Later', image: '', url: '29.html' },
  { name: 'Coming Later', image: '', url: '30.html' },
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
