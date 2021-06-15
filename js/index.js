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
  console.log('Click Rock');
};

const paperEvent = () => {
  console.log('Click Paper');
};

const scissorEvent = () => {
  console.log('Click Scissor');
};
