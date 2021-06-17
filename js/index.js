import { buttonDisabled } from './disabledButton/disabledButton.js';
import { htmlVariables } from './htmlVariables/variables.js';
const { disabledButton, enableButton } = buttonDisabled();
const { rock, paper, scissor, reset } = htmlVariables();
const player1 = document.querySelector('.points-player-1'), player2 = document.querySelector('.points-pc');
let pointsPlayer1 = 0, pointsPC = 0, rounds = 0, empate = 0;
addEventListener('DOMContentLoaded', () => {
    rock.addEventListener('click', () => playingVsPc('rock'));
    paper.addEventListener('click', () => playingVsPc('paper'));
    scissor.addEventListener('click', () => playingVsPc('scissor'));
    reset.addEventListener('click', () => resetGame());
    reset.classList.add('disabled');
    reset.classList.remove('game-init');
});
const playingVsPc = (eventPlayer = '') => {
    const PC = Math.floor(Math.random() * 6) + 1;
    console.log(PC);
    switch (eventPlayer) {
        case 'rock':
            return logicRock(2, PC);
        case 'paper':
            return logicPaper(2, PC);
        case 'scissor':
            return logiScissor(2, PC);
        default:
            return console.log('Error no se selecciono ninguno');
    }
};
const logicRock = (rock = 2, PC = 0) => {
    console.clear();
    if (rock === PC) {
        rounds++;
        empate++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
    else if (rock >= PC) {
        rounds++;
        pointsPlayer1++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
    else if (rock <= PC) {
        rounds++;
        pointsPC++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
};
const logicPaper = (paper = 2, PC = 0) => {
    console.clear();
    if (paper === PC) {
        rounds++;
        empate++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
    else if (paper >= PC) {
        rounds++;
        pointsPlayer1++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
    else if (paper <= PC) {
        rounds++;
        pointsPC++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
};
const logiScissor = (scissor = 2, PC = 0) => {
    console.clear();
    if (scissor === PC) {
        rounds++;
        empate++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
    else if (scissor >= PC) {
        rounds++;
        pointsPlayer1++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
    else if (scissor <= PC) {
        rounds++;
        pointsPC++;
        pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
    }
};
const pointsHTML = (player, PC, empate, rounds) => {
    if (rounds === 3) {
        disabledButton(rock);
        disabledButton(paper);
        disabledButton(scissor);
        return console.log(`Puntos Jugador ${player}\nPuntos PC ${PC}\nRonda ${rounds}\nEmpate ${empate}`);
    }
    if (rounds >= 1) {
        reset.classList.remove('disabled');
        reset.classList.add('game-init');
    }
    return console.log(`Puntos Jugador ${player}\nPuntos PC ${PC}\nRonda ${rounds}\nEmpate ${empate}`);
};
const resetGame = () => {
    reset.classList.add('disabled');
    reset.classList.remove('game-init');
    enableButton(rock);
    enableButton(paper);
    enableButton(scissor);
    pointsPlayer1 = 0;
    pointsPC = 0;
    rounds = 0;
    empate = 0;
    disabledButton(reset);
    if (rounds >= 0) {
        enableButton(reset);
    }
    else if (rounds === 3) {
        disabledButton(reset);
    }
    return console.log(`Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`);
};
//# sourceMappingURL=index.js.map