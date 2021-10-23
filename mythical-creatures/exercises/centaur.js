class Centaur {
  constructor(name) {
    this.name = name.name;
    this.breed = name.type;
    this.cranky = false;
    this.standing = true;
    this.activeCount = 0;
  }
  shootBow() {
    this.activeCount ++
    if (this.activeCount >= 3) {
      this.cranky = true
      return 'NO!'
    }
    return 'Twang!!!'
  }
  run() {
    this.activeCount ++
    if (this.activeCount >= 3) {
      this.cranky = true
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }
  sleep() {
    if (this.standing = true) {
      return 'NO!'
    }
  }

}

module.exports = Centaur
