class Ship {
  constructor(length, head, tail) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.horzontal = true; // maybe use this for quick conditionals when calculating hits coordinates or EVEN PLACEMENT in GUI
    if (
      (tail[0] - head[0] === length - 1 && head[1] === tail[1]) ||
      (tail[1] - head[1] === length - 1 && head[0] === tail[0])
    ) {
      this.head = head;
      this.tail = tail;
    } else {
      throw new Error("wrong coords");
    }
  }

  hit() {
    this.hits++;
    // this.isSunk();
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

class Gameboard {
  constructor(...args) {
    // this.ship0;
    // this.ship1;
    // this.ship2;
    this.missedShots = [];
    this.placeShips(args);
  }

  placeShips(args) {
    for (let i = 0; i < args.length; i++) {
      this[`ship${i}`] = new Ship(...args[i]);
    }
  }

  recieveAttack() {}
}

export { Ship, Gameboard };
