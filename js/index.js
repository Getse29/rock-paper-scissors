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
  rock.addEventListener('click', rockEvent);
  paper.addEventListener('click', paperEvent);
  scissor.addEventListener('click', scissorEvent);
});

/* funciones */
const rockEvent = () => {
  return playingVsPc('rock');
};

const paperEvent = () => {
  return playingVsPc('paper');
};

const scissorEvent = () => {
  return playingVsPc('scissor');
};

const playingVsPc = (eventPlayer = '') => {
  const PC = Math.floor(Math.random() * 3) + 1;

  console.log(PC);
  switch (eventPlayer) {
    case 'rock':
      let rock = 2;
      if (rock === PC) {
        return console.log(`Son iguales ${rock === PC}`);
      } else if (rock >= PC) {
        return console.log(`Jugador es mayor que PC ${rock >= PC}`);
      } else if (rock <= PC) {
        return console.log(`PC es mayor que Jugador ${PC >= rock}`);
      }
      break;

    case 'paper':
      let paper = 2;
      if (paper === PC) {
        return console.log(`Son iguales ${paper === PC}`);
      } else if (paper >= PC) {
        return console.log(`Jugador es mayor que PC ${paper >= PC}`);
      } else if (paper <= PC) {
        return console.log(`PC es mayor que Jugador ${PC >= paper}`);
      }
      break;

    case 'scissor':
      let scissor = 2;
      if (scissor === PC) {
        return console.log(`Son iguales ${scissor === PC}`);
      } else if (scissor >= PC) {
        return console.log(`Jugador es mayor que PC ${scissor >= PC}`);
      } else if (scissor <= PC) {
        return console.log(`PC es mayor que Jugador ${PC >= scissor}`);
      }
      break;
    default:
      console.log('error no se selecciono ninguno');
      break;
  }
};
