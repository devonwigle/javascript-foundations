class Hobbit {
  constructor(name) {
    var nameObject = function(name) {
      return name.name
    }
    this.name = name.name;
    this.age = 0;
    this.adult = false
  }
  celebrateBirthday() {
    this.age ++
    if (this.age >= 33) {
      this.adult = true
    }
  }

}
module.exports = Hobbit
