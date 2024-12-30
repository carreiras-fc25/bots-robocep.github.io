function displayPlayers(playerList) {
    const playerListDiv = document.getElementById("player-list");
    playerListDiv.innerHTML = ""; // Limpa a lista atual

    playerList.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.className = "player";
        playerDiv.innerHTML = `
            <h2>${player.name}</h2>
            <p>Idade: ${player.age}</p>
            <p>Posição: ${player.position}</p>
            <p>Rating: ${player.rating}</p>
            <p>Clube: ${player.club}</p>
        `;
        playerListDiv.appendChild(playerDiv);
    });
}

// Função de busca
function searchPlayer() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchInput));
    displayPlayers(filteredPlayers);
}

// Exibe todos os jogadores ao carregar a página
window.onload = () => {
    displayPlayers(players);
};
