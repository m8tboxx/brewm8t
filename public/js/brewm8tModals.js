const mashingModal = new Modal({
    element: document.querySelector('.mashingModal'),
    effect: 'zoom',
    size: 'small',
    title: 'Einmaischen',
    content: '<p>Bitte gib das Malz ins Wasser!</p>',
    onOpen: function() {
        playAudio();
        console.log('Mashing open');
    },
    onClose: function() {
        stopAudio();
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
        console.log('Purifying open');
    },
    onClose: function() {
        console.log('Purifying closed');
        socket.emit('purifying-confirmed');
    }
});