const Traveler = require("./Traveler")

class Hunter extends Traveler {
  constructor(name, _food, _isHealthy) {
    super(name, _food, _isHealthy);
    this._food = 2;
  }

  hunt(){
      return this._food+= 5;
  }

  eat(){
      if (this._food > 1) {return this._food -= 2}
      if (this._food === 1) {
          this._isHealthy = false
          this._food -= 1
          return this._food
      }
      return this._isHealthy = false
  }

  giveFood(traveler, numOfFoodUnits){
    if (numOfFoodUnits <= this._food) {
        traveler._food += numOfFoodUnits
        return this._food -= numOfFoodUnits
    }
  }
}

module.exports = Hunter