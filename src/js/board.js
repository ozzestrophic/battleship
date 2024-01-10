class Ship {
  constructor(length, head, tail) {
    this.length = length;
    this.squares = [];
    this.hits = 0;
    this.sunk = false;
    this.horzontal = true; // maybe use this for quick conditionals when calculating hits coordinates or EVEN PLACEMENT in GUI
    this.placeSingleShip(length, head, tail);
  }

  placeSingleShip(length, head, tail) {
    // place ships whether coordinates are horizontal or vertical
    if (tail[0] - head[0] === length - 1 && head[1] === tail[1]) {
      this.head = head;
      this.tail = tail;
      for (let i = 0; i < length; i++) {
        this.squares.push([head[0] + i, head[1]]);
      }
    } else if (tail[1] - head[1] === length - 1 && head[0] === tail[0]) {
      this.head = head;
      this.tail = tail;
      for (let i = 0; i < length; i++) {
        this.squares.push([head[0], head[1] + i]);
      }
    } else {
      throw new Error("wrong coords");
    }
  }

  hit() {
    this.hits++;
    this.isSunk();
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
    this.placeShips(args);
    // this.missedShots = [];
    // this.correctShots = [];
    this.prevShots = [];
    this.shipsSunk = false;
  }

  placeShips(args) {
    for (let i = 0; i < args.length; i++) {
      this[`ship${i}`] = new Ship(...args[i]);
    }
    // LATER handle ships collision .. no ships allowed same suqares
  }

  receiveAttack(coords) {
    for (const key in this) {
      if (!this[key].squares) {
        continue;
      }
      if (
        this[key].squares.some(
          (square) => square[0] === coords[0] && square[1] === coords[1]
        )
      ) {
        this[key].hit();
      }
    }
    this.prevShots.push(coords);
    return this.checkShipsSunk();
  }

  checkShipsSunk() {
    for (const key in this) {
      if (!this[key].squares) {
        continue;
      }
      if (!this[key].sunk) {
        return "not yet";
      }
      this.shipsSunk = true;
      return "game over";
    }
  }
}

export { Ship, Gameboard };
