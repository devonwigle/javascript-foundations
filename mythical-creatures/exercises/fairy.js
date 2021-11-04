class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
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
}

module.exports = Fairy
