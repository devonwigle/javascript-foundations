class Ogre {
  constructor(beast) {
    this.name = beast.name;
    this.home = beast.abode || 'Swamp';
  }
  encounter(human) {
    human.encounterCounter ++
  }
}

module.exports = Ogre;
