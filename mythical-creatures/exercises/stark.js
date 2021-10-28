class Stark {
  constructor(stark = {}) {
    this.name = stark.name
    this.location = stark.area || 'Winterfell'
    this.safe = false
  }
  sayHouseWords() {
    return 'Winter is Coming'
  }
}

module.exports = Stark
