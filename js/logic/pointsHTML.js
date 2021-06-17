import { buttonDisabled } from '../disabledButton';
const rock = document.querySelector('.rock'), paper = document.querySelector('.paper'), scissor = document.querySelector('.scissor');
const { disabledButton } = buttonDisabled();
const points = () => {
    const pointsHTML = (player, PC, empate, rounds) => {
        if (rounds === 3) {
            disabledButton(rock);
            disabledButton(paper);
            disabledButton(scissor);
            return;
        }
        return console.log(`Puntos Jugador ${player}\nPuntos PC ${PC}\nRonda ${rounds}\nEmpate ${empate}`);
    };
    return {
        pointsHTML,
    };
};
export default points;
//# sourceMappingURL=pointsHTML.js.map