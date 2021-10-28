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
}

module.exports = Stark
