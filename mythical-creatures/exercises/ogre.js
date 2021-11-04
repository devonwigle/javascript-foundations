class Ogre {
  constructor(beast) {
    this.name = beast.name;
    this.home = beast.abode || 'Swamp';
  }
}

module.exports = Ogre;
