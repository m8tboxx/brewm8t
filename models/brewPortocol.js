module.exports = class BrewingProtocol {
    constructor() {
        this.currentStep = 0;
        this.steps = [{ stepNo: 0, temperature: 0, status: 'StandBy', time: 0, countdown: false }];
    }
}