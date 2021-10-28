class Stark {
  constructor(stark = {}) {
    this.name = stark.name
    this.location = stark.area || 'Winterfell'
  }
}

module.exports = Stark
