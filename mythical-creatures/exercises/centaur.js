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
    if (this.activeCount >= 3) {
      this.cranky = true
      return 'NO!'
    } else if (this.layingDown) {
      return 'NO!'
    }
    return 'Twang!!!'
  };

  run() {
    this.activeCount ++
    if (this.activeCount >= 3) {
      this.cranky = true
      return 'NO!'
    } else if (this.layingDown) {
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  };

  sleep() {
    if (this.layingDown) {
      this.cranky = false
      this.activeCount = 0
      return 'ZZZZ'
    };
    return 'NO!'
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };
  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    }
    this.activeCount = 0;
    this.cranky = false;
  }
}

module.exports = Centaur
