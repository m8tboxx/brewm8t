const { Board, Led, Relay, Thermometer } = require('johnny-five');
const { Server } = require('socket.io');
const Countdown = require('./countdown');

// let countdownDuration = 9*60;

// if(countdown.isFinished) {
//     countdown.setDuration(countdownDuration);
//     countdown.start();
// }

// countdown.on('update', (countdownValue) => {
//     countdownDuration = countdownValue;
//     io.emit('countdown', countdownValue);
// });


class ArduinoBoardSocketHandler {
    constructor(server) {
        // this.board = new Board();
        this.io = new Server(server);
        // this.led = new Led(13);
        // this.agitatorRelay = new Relay(10);
        // this.burnerRelay = new Relay(11);
        this.receipt = null;
        this.countdownDuration = 0;
        // this.mashSensor = new Thermometer({
        //     controller: "DS18B20",
        //     pin: 2
        // });

        //this.initialize();
        this.setupEventHandlers();
    }

    initialize() {
        this.board.on('ready', () => {
            this.setupEventHandlers();
        });
    }

    setupEventHandlers() {
        this.io.on('connection', (socket) => {
            console.log('UI connected');
            this.io.emit('countdown', this.countdownDuration);
            this.io.emit('set-start-ui');
    
            socket.on('agitator-switch', (data) => {
                // if(data) this.agitatorRelay.close();
                // else this.agitatorRelay.open();
            });

            // this.mashSensor.on('change', () => {
            //     const { celsius } = this.mashSensor;
            //     console.log(celsius);
            //     this.io.emit('mash-sensor-changed', celsius);
            // });
    
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
    }
}

module.exports = ArduinoBoardSocketHandler;