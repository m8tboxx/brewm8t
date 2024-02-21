const mashingModal = new Modal({
    element: document.querySelector('.mashingModal'),
    effect: 'zoom',
    size: 'small',
    title: 'Einmaischen',
    content: '<p>Bitte gib das Malz ins Wasser!</p>',
    footer: '<button class="close">Bestätigen</button>',
    onOpen: function() {
        playConfirmAudio();
        console.log('Mashing open');
    },
    onClose: function() {
        stopConfirmAudio();
        console.log('Mashing closed');
        socket.emit('mash-confirmed');
    }
});

const purifyModal = new Modal({
    effect: 'zoom',
    size: 'medium',
    title: 'Läuterruhe',
    content: '<p>Bitte entferne das Rührwerk, damit die Läuterruhe beginnen kann.</p>',
    footer: '<button class="close">Bestätigen</button>',
    onOpen: function() {
        playFinishAudio();
        console.log('Purifying open');
    },
    onClose: function() {
        stopFinishAudio();
        console.log('Purifying closed');
        socket.emit('purifying-confirmed');
    }
});