class Ogre {
  constructor(beast) {
    this.name = beast.name;
    this.home = beast.abode || 'Swamp';
    this.swings = 0
  }
  encounter(human) {
    human.encounterCounter ++
    if (human.noticesOgre()) {
      this.swingAt(human)
    }
  }
  swingAt(human) {
    this.swings ++
  }
}

module.exports = Ogre;
