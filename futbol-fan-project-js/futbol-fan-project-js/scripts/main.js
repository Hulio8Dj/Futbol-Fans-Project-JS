// Script principal para el proyecto de fútbol en JavaScript

document.addEventListener("DOMContentLoaded", () => {
  console.log("¡Bienvenido al proyecto de fútbol!");
  fetch('./data/stats.json')
    .then(response => response.json())
    .then(data => {
      console.log("Estadísticas de jugadores:", data.players);
      data.players.forEach(player => {
        console.log(`${player.name} (Equipo: ${player.team}) - Goles: ${player.goals}, Asistencias: ${player.assists}`);
      });
    })
    .catch(error => console.error("Error al cargar las estadísticas:", error));
});