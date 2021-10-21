class Magician {
  constructor(name) {
    this.name = `The Great ${name.name}`;
    this.assistant = name.assistant;
    this.favoriteAccessory = name.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  performIncantation(magic) {
    return `${magic.toUpperCase()}!`
  }
  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory !== 'top hat') {
      return 'PULL DOVE FROM SLEEVE'
    }
    return 'PULL RABBIT FROM TOP HAT'
  }
}
module.exports = Magician
