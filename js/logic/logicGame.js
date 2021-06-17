import { htmlVariables } from '../htmlVariables/variables';
const { pointsPlayer1, pointsPC, rounds, empate } = htmlVariables();
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
//# sourceMappingURL=logicGame.js.map