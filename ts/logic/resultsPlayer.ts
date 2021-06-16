const rock = <HTMLInputElement>document.querySelector('.rock'),
  paper = <HTMLInputElement>document.querySelector('.paper'),
  scissor = <HTMLInputElement>document.querySelector('.scissor'),
  player1 = document.querySelector('.points-player-1') as HTMLDivElement,
  player2 = document.querySelector('.points-pc') as HTMLDivElement;

export const pointsHTML = (
  player: number,
  PC: number,
  empate: number,
  rounds: number
): void => {
  if (rounds === 3) {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
  }

  return console.log(
    `Puntos Jugador ${player}\nPuntos PC ${PC}\nRonda ${rounds}\nEmpate ${empate}`
  );
};
