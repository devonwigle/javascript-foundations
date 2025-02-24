class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.fedTimes = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.fedTimes ++
    if (this.fedTimes >= 3) {
      return this.hungry = false
    }
  }
}
module.exports = Dragon;
