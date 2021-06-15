/* variables */
let pointsPlayer1 = 0,
  pointsPlayer2 = 0;

const player1 = document.querySelector('.points-player-1'),
  player2 = document.querySelector('.points-player-1'),
  rock = document.querySelector('.rock'),
  paper = document.querySelector('.paper'),
  scissor = document.querySelector('.scissor');

/* eventos */
addEventListener('DOMContentLoaded', () => {
  rock.addEventListener('click', () => playingVsPc('rock'));
  paper.addEventListener('click', () => playingVsPc('paper'));
  scissor.addEventListener('click', () => playingVsPc('scissor'));
});

/* funciones */

const playingVsPc = (eventPlayer = '') => {
  const PC = Math.floor(Math.random() * 3) + 1;

  console.log(PC);
  switch (eventPlayer) {
    case 'rock':
      logicRock(2, PC);
      break;

    case 'paper':
      logicPaper(2, PC);
      break;

    case 'scissor':
      logiScissor(2, PC);
      break;
    default:
      console.log('Error no se selecciono ninguno');
      break;
  }
};

const logicRock = (rock = 2, PC = 0) => {
  console.clear();
  if (rock === PC) {
    return console.log(`Son iguales`);
  } else if (rock >= PC) {
    return console.log(`Rocka Gana`);
  } else if (rock <= PC) {
    return console.log(`Papel Gana`);
  }
};

const logicPaper = (paper = 2, PC = 0) => {
  console.clear();
  if (paper === PC) {
    return console.log(`Son iguales`);
  } else if (paper >= PC) {
    return console.log(`Papel gana`);
  } else if (paper <= PC) {
    return console.log(`Tijeras Gana`);
  }
};

const logiScissor = (scissor = 2, PC = 0) => {
  console.clear();
  if (scissor === PC) {
    return console.log(`Son iguales`);
  } else if (scissor >= PC) {
    return console.log(`Tijeras Gana`);
  } else if (scissor <= PC) {
    return console.log(`Piedra Gana`);
  }
};
