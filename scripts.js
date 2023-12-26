// Simulated game data (replace this with real data from a database or API)
const games = [
    { name: 'prisoners dilemna', image: '', url: '1.html' },
    { name: 'coming later', image: '', url: '2.html' },
    { name: 'coming later', image: '', url: '3.html' },
    { name: 'coming later', image: '', url: '4.html' },
    { name: 'coming later', image: '', url: '5.html' },
    { name: 'coming later', image: '', url: '6.html' },
    { name: 'coming later', image: '', url: '7.html' },
    { name: 'coming later', image: '', url: '8.html' },
    { name: 'coming later', image: '', url: '9.html' },
    // Add more game objects with names, image paths, and URLs
  ];
  
  // Function to display games on the page
  function displayGames() {
    const gamesContainer = document.getElementById('gamesContainer');
  
    gamesContainer.innerHTML = ''; // Clear previous games
  
    games.forEach(game => {
      const gameElement = document.createElement('div');
      gameElement.classList.add('game');
  
      const image = document.createElement('img');
      image.src = game.image;
      image.alt = game.name;
  
      const name = document.createElement('h3');
      name.textContent = game.name;
  
      const playButton = document.createElement('button');
      playButton.textContent = 'Play';
      playButton.addEventListener('click', () => {
        window.location.href = game.url;
      });
  
      gameElement.appendChild(image);
      gameElement.appendChild(name);
      gameElement.appendChild(playButton);
      gamesContainer.appendChild(gameElement);
    });
  }
  
  // Initial display of games on page load
  displayGames();
  