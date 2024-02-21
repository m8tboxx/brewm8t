const socket = io();

const checkbox = document.getElementById("agitator-switch");
const targetMashTemperature = document.getElementById("target-mash-temp");
const tragetWortTemperature = document.getElementById("target-wort-temp");

document.getElementById('brew-status').setAttribute("style", "width: 0%");;

checkbox.addEventListener('change', () => {
    const checkboxValue = checkbox.checked;
    socket.emit('agitator-switch', checkboxValue);
});

socket.on('set-start-ui', () => {
    targetMashTemperature.textContent = `Ziel: 0°C`;
    tragetWortTemperature.textContent = `Ziel: 0°C`;
});

socket.on('countdown', (countdownValue) => {
    let hours = Math.floor(countdownValue / 3600).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    countdownValue = countdownValue - (3600 * hours);
    let minutes = Math.floor(countdownValue / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    countdownValue = countdownValue - (60 * minutes);
    let seconds = countdownValue.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
});

socket.on('mash-sensor-changed', (mashTemperature) => {
    document.getElementById("mash-temperature").textContent = `${mashTemperature} °C`;
});