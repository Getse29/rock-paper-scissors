const rock = document.querySelector('.rock'), paper = document.querySelector('.paper'), scissor = document.querySelector('.scissor'), player1 = document.querySelector('.points-player-1'), player2 = document.querySelector('.points-pc');
export const pointsHTML = (player, PC, empate, rounds) => {
    if (rounds === 3) {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
    return console.log(`Puntos Jugador ${player}\nPuntos PC ${PC}\nRonda ${rounds}\nEmpate ${empate}`);
};
//# sourceMappingURL=resultsPlayer.js.map