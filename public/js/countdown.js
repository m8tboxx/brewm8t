const socket = io();

socket.on('countdown', (countdownValue) => {
    let hours = Math.floor(countdownValue / 3600).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    countdownValue = countdownValue - (3600 * hours);
    let minutes = Math.floor(countdownValue / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    countdownValue = countdownValue - (60 * minutes);
    let seconds = countdownValue.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
});