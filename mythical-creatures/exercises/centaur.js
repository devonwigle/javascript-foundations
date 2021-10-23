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
    }
    return 'Twang!!!'
  }
  run() {
    this.activeCount ++
    if (this.activeCount >= 3) {
      this.cranky = true
    }
    return 'Clop clop clop clop!!!'
  }

}

module.exports = Centaur
