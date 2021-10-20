class Hobbit {
  constructor(name) {
    var nameObject = function(name) {
      return name.name
    }
    this.name = name.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
  }
  celebrateBirthday() {
    this.age ++
    if (this.age >= 33 && this.age < 101) {
      this.adult = true
    } else {
      if (this.age >= 101) {
        this.old = true
      }
    }
  }

}
module.exports = Hobbit
