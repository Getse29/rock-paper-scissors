/* variables */
let pointsPlayer1: number = 0,
  pointsPC: number = 0,
  rounds: number = 0;

const player1 = document.querySelector('.points-player-1'),
  player2 = document.querySelector('.points-pc'),
  rock = document.querySelector('.rock') as HTMLDivElement,
  paper = document.querySelector('.paper') as HTMLDivElement,
  scissor = document.querySelector('.scissor') as HTMLDivElement;

/* eventos */
addEventListener('DOMContentLoaded', () => {
  rock.addEventListener('click', () => playingVsPc('rock'));
  paper.addEventListener('click', () => playingVsPc('paper'));
  scissor.addEventListener('click', () => playingVsPc('scissor'));
});

/* funciones */

const playingVsPc = (eventPlayer = '') => {
  const PC: number = Math.floor(Math.random() * 3) + 1;

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

const winner = (player1 = 0, PC = 0): void => {
  /*  */
};

const logicRock = (rock = 2, PC = 0): void => {
  console.clear();
  if (rock === PC) return console.log(`Son iguales`);
  else if (rock >= PC) return console.log(`Rocka Gana`);
  else if (rock <= PC) return console.log(`Papel Gana`);

};

const logicPaper = (paper = 2, PC = 0): void => {
  console.clear();
  if (paper === PC) return console.log(`Son iguales`);
  else if (paper >= PC) return console.log(`Papel gana`);
  else if (paper <= PC) return console.log(`Tijeras Gana`);

};

const logiScissor = (scissor = 2, PC = 0): void => {
  console.clear();
  if (scissor === PC) return console.log(`Son iguales`);
  else if (scissor >= PC) return console.log(`Tijeras Gana`);
  else if (scissor <= PC) return console.log(`Piedra Gana`);

};

