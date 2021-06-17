const htmlVariables = () => {
  const rock = <HTMLInputElement>document.querySelector('.rock'),
    paper = <HTMLInputElement>document.querySelector('.paper'),
    scissor = <HTMLInputElement>document.querySelector('.scissor'),
    reset = <HTMLInputElement>document.getElementById('reset');

  return {
    rock,
    paper,
    scissor,
    reset,
  };
};

export { htmlVariables };
/*  */
