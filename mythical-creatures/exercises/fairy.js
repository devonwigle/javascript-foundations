class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust ++
  }
  believe() {
    this.dust += 10
  }
  makeDresses(flower) {
    for (var i = 0; i < flower.length; i++)
      this.clothes.dresses.push(flower[i])
  }
  becomeProvoked() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(infant) {
    if ((this.humanWards.length >= 2) || this.disposition === 'Good natured') {
      this.disposition = 'Good natured'
      return infant
    }
    infant.disposition = 'Malicious'
    this.humanWards.push(infant)
  }
}

module.exports = Fairy
