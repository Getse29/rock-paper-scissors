const buttonDisabled = () => {
    const rock = document.querySelector('.rock'), paper = document.querySelector('.paper'), scissor = document.querySelector('.scissor');
    const disabledButton = (button) => {
        return (button.disabled = true);
    };
    const enableButton = (button) => {
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
//# sourceMappingURL=disabledButton.js.map