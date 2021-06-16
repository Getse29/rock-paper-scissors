import { logicRock, logicPaper, logiScissor } from './logic/logicGame.js';
/* variables */

const rock = document.querySelector('.rock') as HTMLDivElement,
  paper = document.querySelector('.paper') as HTMLDivElement,
  scissor = document.querySelector('.scissor') as HTMLDivElement;

/* eventos */
addEventListener('DOMContentLoaded', (): void => {
  rock.addEventListener('click', () => playingVsPc('rock'));
  paper.addEventListener('click', () => playingVsPc('paper'));
  scissor.addEventListener('click', () => playingVsPc('scissor'));
});

/* funciones */

const playingVsPc = (eventPlayer: string = ''): void => {
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

const winner = (player: number = 0, PC: number = 0): void => {
  /*  */
};

const resetGame = (): void => {
  /* reset game */
};
