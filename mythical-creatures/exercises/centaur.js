class Centaur {
  constructor(name) {
    this.name = name.name;
    this.breed = name.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activeCount = 0;
  };

  shootBow() {
    this.activeCount ++
    if ((this.activeCount >= 3) || (this.layingDown === true)){
      this.cranky = true
      return 'NO!'
    }
    return 'Twang!!!'
  };

  run() {
    this.activeCount ++
    if ((this.activeCount >= 3) || (this.layingDown === true)) {
      this.cranky = true
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  };

  sleep() {
    if (this.standing = true) {
      return 'NO!'
    }
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };
}

module.exports = Centaur
