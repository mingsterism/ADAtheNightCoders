class elf {
  constructor(hp, mp, atk, mag, heal, multiplier) {
    this.hp = hp;
    this.mp = mp;
    this.atk = atk;
    this.mag = mag;
    this.heal = heal;
    this.multiplier = multiplier;
  }

  castMagic(otherElf) {
    this.mp = this.mp - 10;
    otherElf.hp = otherElf.hp - this.mag * this.multiplier;
    return this.mp;
  }

  castCure(otherElf) {
    this.mp = this.mp - 8;
    otherElf.hp = otherElf.hp + this.heal * this.multiplier;
  }
}

var moonRider = new elf(200, 300, 40, 80, 30, 1.15);
var rainDrower = new elf(185, 260, 33, 68, 30, 1.2);
var farSeer = new elf(230, 320, 30, 86, 20, 1.3);
var Firaga = moonRider.castMagic(rainDrower);
var curaga = farSeer.castCure(rainDrower);
console.log(Firaga);
console.log(
  "Moon Rider casts magic on Rain Drower, Moon Rider mp is",
  moonRider.mp,
  "Rain Drower hp is",
  rainDrower.hp
);
console.log(curaga);
console.log(
  "Far Seer heals Rain Drower, Far Seer mp is",
  farSeer.mp,
  "Rain Drower hp is",
  rainDrower.hp
);
