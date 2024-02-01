module.exports = class Step {
    constructor(data) {
        this.stepNo = data.stepNo;
        this.temperature = data.temperature;
        this.status = data.status;
        this.time = data.time;
        this.countdown = data.countdown;
    }
}