const buttonDisabled = () => {
  const rock = <HTMLInputElement>document.querySelector('.rock'),
    paper = <HTMLInputElement>document.querySelector('.paper'),
    scissor = <HTMLInputElement>document.querySelector('.scissor');

  const disabledButton = (button: any): boolean => {
    return (button.disabled = true);
  };

  const enableButton = (button: any): boolean => {
    return (button.disabled = false);
  };

  return {
    disabledButton,
    enableButton,
    rock,
    paper,
    scissor,
  };
};

export { buttonDisabled };
