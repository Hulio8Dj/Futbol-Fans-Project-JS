// Script principal para el proyecto de fútbol en JavaScript

document.addEventListener("DOMContentLoaded", () => {
  fetch('./data/stats.json')
    .then(response => response.json())
    .then(data => {
      const statsContainer = document.createElement('div');
      statsContainer.id = 'stats-container';

      data.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        playerCard.innerHTML = `
          <h3>${player.name}</h3>
          <p><strong>Equipo:</strong> ${player.team}</p>
          <p><strong>Goles:</strong> ${player.goals}</p>
          <p><strong>Asistencias:</strong> ${player.assists}</p>
        `;

        statsContainer.appendChild(playerCard);
      });

      document.body.appendChild(statsContainer);
    })
    .catch(error => {
      console.error("Error al cargar las estadísticas:", error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = "Error al cargar las estadísticas. Por favor, inténtelo de nuevo más tarde.";
      document.body.appendChild(errorMessage);
    });
});
