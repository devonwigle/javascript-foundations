class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
  }
  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle)
    } else {
      this.riddles.shift()
      this.riddles.push(riddle)
    }
  }
  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (answer === this.riddles[i].answer) {
        this.riddles.splice(i, 1)
      }
    }
  }
}

module.exports = Sphinx;
