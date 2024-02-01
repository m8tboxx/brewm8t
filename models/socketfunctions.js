const { Server } = require('socket.io');

function initializeSocket(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('UI connected');

        socket.on('agitator-switch', (data) => {
            if(data) console.log("Agitator on");
            else console.log("Agitator off");
        });

        socket.on('mash-confirmed', () => {
            console.log("Mash confirmed");
        });

        socket.on('purifying-confirmed', () => {
            console.log("Purifying confirmed");
        });

        socket.on('disconnect', () => {
            console.log('UI disconnected');
        });
    });

    return io;
}

module.exports = { initializeSocket };