const checkbox = document.getElementById("agitator-switch");

checkbox.addEventListener('change', () => {
    const checkboxValue = checkbox.checked;
    socket.emit('agitator-switch', checkboxValue);
});