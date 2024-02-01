const { EventEmitter } = require('events');

class Countdown extends EventEmitter {
    constructor(duration) {
        super();
        this.countdown = duration;
        this.finished = true;
    }

    start() {
        if(this.finished) {
            if(this.countdown > 0) {
                const countdownInterval = setInterval(() => {
                    this.countdown--;
                    this.emit('update', this.countdown);
                    this.finished = false;
        
                    if(this.countdown <= 0) {
                        clearInterval(countdownInterval);
                        this.emit('finish');
                        this.finished = true;
                    }
        
                }, 1000);
            } else {
                this.finished = true;
            }
        }
    }

    isFinished() {
        return this.finished;
    }

    setDuration(duration) {
        this.countdown = duration;
    }
}

module.exports = Countdown;