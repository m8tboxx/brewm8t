const socket = io();

socket.on('countdown', (countdownValue) => {
    let hours = Math.floor(countdownValue / 3600).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    countdownValue = countdownValue - (3600 * hours);
    let minutes = Math.floor(countdownValue / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    countdownValue = countdownValue - (60 * minutes);
    let seconds = countdownValue.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
});

// var audio = new Audio('https://artlist.io/sfx/track/paramount---tribal-drums-logo/80232');
// audio.type = 'audio/wav';

//   try {
//     audio.play();
//     console.log('Playing...');
//   } catch (err) {
//     console.log('Failed to play...' + err);
//   }

var audio = new Audio('/audio/terminator.mp3');

  async function playAudio() {
    //var audio = new Audio('https://artlist.io/sfx/track/paramount---tribal-drums-logo/80232');
    audio.type = 'audio/wav';
  
    try {
      await audio.play();
      console.log('Playing...');
    } catch (err) {
      console.log('Failed to play...' + err);
    }
  }

  function stopAudio() {
    audio.pause();
    audio = new Audio('/audio/terminator.mp3');
    //audio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav');
  }