const buttonDisabled = () => {
    const disabledButton = (button) => {
        return (button.disabled = true);
    };
    const enableButton = (button) => {
        return (button.disabled = false);
    };
    return {
        disabledButton,
        enableButton,
    };
};
export { buttonDisabled };
//# sourceMappingURL=disabledButton.js.map