class Magician {
  constructor(name) {
    this.name = `The Great ${name.name}`;
    this.assistant = name.assistant
    this.favoriteAccessory = name.clothing || 'top hat'
  }
  performIncantation(magic) {
    return `${magic.toUpperCase()}!`
  }
  performTrick() {
    if (this.favoriteAccessory !== 'top hat') {
      return 'PULL DOVE FROM SLEEVE'
    }
    return 'PULL RABBIT FROM TOP HAT'
  }
}
module.exports = Magician
