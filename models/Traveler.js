class Traveler {
    constructor(name) {
      this.name = name
      this._food = 1
      this._isHealthy = true
    }
  
    set food(value) {
      this._food = value
    }
    get food() {
      return this._food
    }
  
    set healthy(value) {
      this._isHealthy = value
    }
    get healthy() {
      return this._isHealthy
    }
  
    hunt() {
      this.food += 2;
      return this.food;
    }
  
    eat() {
      if (this.food > 0) {
        this.food -= 1;
        return this.food;
      }
      return (this.isHealthy = false);
    }
  }

module.exports = Traveler;