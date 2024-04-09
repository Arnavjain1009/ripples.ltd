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
  { name: 'shapeshifter(mobile)', image: 'https://cdn.dribbble.com/users/2475489/screenshots/9239848/media/ff48675e4dd24c950af1dda5ac3c6019.gif', url: '6.html' },
  { name: 'r9gpt beta', image: 'https://th.bing.com/th/id/OIP.eehDXMZDLI5VUyJAchbiqQHaEQ?w=1392&h=800&rs=1&pid=ImgDetMain', url: '7.html' },
  { name: 'shapeshifter (computer)', image: 'https://cdn.dribbble.com/users/2475489/screenshots/9239848/media/ff48675e4dd24c950af1dda5ac3c6019.gif', url: '8.html' },
  { name: 'mymom.fun', image: 'https://th.bing.com/th/id/OIP.6ry2UChEUozCZjHXYdL97gHaFH?rs=1&pid=ImgDetMain', url: '9.html' },
  { name: 'your ip adress', image: 'https://media.proprofs.com/images/QM/user_images/1826446/1464866502.jpg', url: '10.html' },
  { name: 'self notes', image: 'https://th.bing.com/th/id/OIP.SgBy5pmiLQHM-ngs1k0OTgHaHa?w=162&h=180&c=7&r=0&o=5&dpr=2&pid=1.7', url: '11.html' },
  { name: 'notification(computer)', image: 'https://static.simpleinout.com/assets/marketing/reminders@2x.en-3df614a42d7b769dd940faf66fddc05c8397f017c10f3a2bc9c3773b397646a1.png', url: '12.html' },
  { name: 'ball bounce', image: 'https://th.bing.com/th/id/R.95456d92a560f3bbb08faaba8b7a6175?rik=LAcC8X85Lp5axw&pid=ImgRaw&r=0', url: '13.html' },
  { name: 'r9search beta', image: 'https://th.bing.com/th/id/OIP.E1DlQTYJQhFp9r1laoIRNAAAAA?rs=1&pid=ImgDetMain', url: '14.html' },
  { name: 'r9gpt beta 2.0', image: 'https://th.bing.com/th/id/OIP.eehDXMZDLI5VUyJAchbiqQHaEQ?w=1392&h=800&rs=1&pid=ImgDetMain', url: '15.html' },
  { name: 'image store', image: 'https://th.bing.com/th/id/OIP.dZfeyoxqlf91TCPz_-v1_QHaHa?rs=1&pid=ImgDetMain', url: '16.html' },
  { name: 'geography test', image: '', url: '17.html' },
  { name: 'recorder', image: '', url: '18.html' },
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
