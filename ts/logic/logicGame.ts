let pointsPlayer1: number = 0,
  pointsPC: number = 0,
  rounds: number = 0,
  empate: number = 0;

export const logicRock = (rock = 2, PC = 0): void => {
  console.clear();
  if (rock === PC) {
    rounds++;
    empate++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  } else if (rock >= PC) {
    rounds++;
    pointsPlayer1++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  } else if (rock <= PC) {
    rounds++;
    pointsPC++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  }
};

export const logicPaper = (paper = 2, PC = 0): void => {
  console.clear();
  if (paper === PC) {
    rounds++;
    empate++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  } else if (paper >= PC) {
    rounds++;
    pointsPlayer1++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  } else if (paper <= PC) {
    rounds++;
    pointsPC++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  }
};

export const logiScissor = (scissor = 2, PC = 0): void => {
  console.clear();
  if (scissor === PC) {
    rounds++;
    empate++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  } else if (scissor >= PC) {
    rounds++;
    pointsPlayer1++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  } else if (scissor <= PC) {
    rounds++;
    pointsPC++;
    return console.log(
      `Puntos Jugador ${pointsPlayer1}\nPuntos PC ${pointsPC}\nRonda ${rounds}\nEmpate ${empate}`
    );
  }
};
