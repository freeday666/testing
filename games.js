const games = [
  { name: "Fireboy and Watergirl 1", url: "https://www.crazygames.com/game/fireboy-and-watergirl-1" },
  { name: "Moto X3M", url: "https://www.crazygames.com/game/moto-x3m" },
  { name: "Super Fighters", url: "https://www.crazygames.com/game/super-fighters" },
  { name: "Run 3", url: "https://www.crazygames.com/game/run-3" },
  { name: "Shell Shockers", url: "https://www.crazygames.com/game/shell-shockers" },
  { name: "Happy Wheels", url: "https://www.crazygames.com/game/happy-wheels" },
  { name: "Tank Trouble", url: "https://www.crazygames.com/game/tank-trouble" }
];

function loadGames() {
  const container = document.getElementById("games-container");
  games.forEach(game => {
    const card = document.createElement("a");
    card.href = game.url;
    card.target = "_blank";
    card.className = "game-card";

    const img = document.createElement("img");
    // Optioneel: voeg een afbeelding toe, hier een placeholder
    img.src = `https://via.placeholder.com/300x150?text=${encodeURIComponent(game.name)}`;
    img.alt = game.name;

    const title = document.createElement("div");
    title.className = "game-title";
    title.textContent = game.name;

    card.appendChild(img);
    card.appendChild(title);
    container.appendChild(card);
  });
}