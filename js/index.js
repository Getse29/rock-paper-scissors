import { logicRock, logicPaper, logiScissor } from './logic/logicGame.js';
const rock = document.querySelector('.rock'), paper = document.querySelector('.paper'), scissor = document.querySelector('.scissor');
addEventListener('DOMContentLoaded', () => {
    rock.addEventListener('click', () => playingVsPc('rock'));
    paper.addEventListener('click', () => playingVsPc('paper'));
    scissor.addEventListener('click', () => playingVsPc('scissor'));
});
const playingVsPc = (eventPlayer = '') => {
    const PC = Math.floor(Math.random() * 3) + 1;
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
const winner = (player = 0, PC = 0) => {
};
const resetGame = () => {
};
//# sourceMappingURL=index.js.map