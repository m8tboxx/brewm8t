module.exports = class Receipt {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.mashTemp = data.mashTemp;
        this.cookingTime = data.cookingTime;
        this.mashingStages = data.mashingStages;
        this.hopStages = data.hopStages;
    }
}