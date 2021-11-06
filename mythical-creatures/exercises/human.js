class Human {
  constructor(person) {
    this.name = person;
    this.encounterCounter = 0;
    this.noticeOgre = false;
    this.knockedOut = false;
  }
  noticesOgre() {
    if (this.encounterCounter === 0) {
      return this.noticeOgre = false;
    } else if ((this.encounterCounter % 3) !== 0) {
      return this.noticeOgre = false
    }
    return this.noticeOgre = true
  }
}

module.exports = Human;
