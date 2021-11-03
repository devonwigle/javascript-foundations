var Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(stark = {}) {
    this.name = stark.name
    this.location = stark.area || 'Winterfell'
    this.safe = false
  }
  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    }
    return 'Winter is Coming'
  }
  callDirewolf(name, home) {
    var wolf = new Direwolf(name, home)
    wolf.home = this.location;
    wolf.protect(this);
    return wolf;
  }
}

module.exports = Stark
