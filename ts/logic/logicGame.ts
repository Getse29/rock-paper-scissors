import { pointsHTML } from './resultsPlayer.js';

let pointsPlayer1: number = 0,
  pointsPC: number = 0,
  rounds: number = 0,
  empate: number = 0;

export const logicRock = (rock = 2, PC = 0): void => {
  console.clear();
  if (rock === PC) {
    rounds++;
    empate++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  } else if (rock >= PC) {
    rounds++;
    pointsPlayer1++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  } else if (rock <= PC) {
    rounds++;
    pointsPC++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  }
};

export const logicPaper = (paper = 2, PC = 0): void => {
  console.clear();
  if (paper === PC) {
    rounds++;
    empate++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  } else if (paper >= PC) {
    rounds++;
    pointsPlayer1++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  } else if (paper <= PC) {
    rounds++;
    pointsPC++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  }
};

export const logiScissor = (scissor = 2, PC = 0): void => {
  console.clear();
  if (scissor === PC) {
    rounds++;
    empate++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  } else if (scissor >= PC) {
    rounds++;
    pointsPlayer1++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  } else if (scissor <= PC) {
    rounds++;
    pointsPC++;
    return pointsHTML(pointsPlayer1, pointsPC, empate, rounds);
  }
};
