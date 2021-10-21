var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    //this.statues needs to hold Statues no person
    //change one class to another class
    var newStatue = new Statue(victim.name)
    this.statues.push(newStatue)
  }
}

module.exports = Medusa
