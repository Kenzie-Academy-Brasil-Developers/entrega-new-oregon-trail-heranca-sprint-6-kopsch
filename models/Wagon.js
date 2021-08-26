class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengersList = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengersList.length === 1
      ? "A carroça tem um assento livre."
      : this.capacity - this.passengersList.length;
  }

  join(oneTraveler) {
    if (this.passengersList.length < this.capacity) {
      return this.passengersList.push(oneTraveler);
    }
  }

  shouldQuarantine() {
    if (this.passengersList.some((elm) => elm.isHealthy === false)) {
      return true;
    }
    return false;
  }

  totalFood() {
    return this.passengersList.reduce((acc, { food }) => acc + food, 0);
  }
}

module.exports = Wagon;
