var confirmAudio = new Audio('/audio/terminator.mp3');
var finishAudio = new Audio('/audio/finished.mp3')

  async function playConfirmAudio() {
    //var audio = new Audio('https://artlist.io/sfx/track/paramount---tribal-drums-logo/80232');
    confirmAudio.type = 'audio/wav';
  
    try {
      await confirmAudio.play();
      console.log('Playing...');
    } catch (err) {
      console.log('Failed to play...' + err);
    }
  }

  function stopConfirmAudio() {
    confirmAudio.pause();
    confirmAudio = new Audio('/audio/terminator.mp3');
    //audio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav');
  }

  async function playFinishAudio() {
    //var audio = new Audio('https://artlist.io/sfx/track/paramount---tribal-drums-logo/80232');
    finishAudio.type = 'audio/wav';
  
    try {
      await finishAudio.play();
    } catch (err) {
      console.log('Failed to play...' + err);
    }
  }

  function stopFinishAudio() {
    finishAudio.pause();
    finishAudio = new Audio('/audio/finished.mp3');
    //audio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav');
  }