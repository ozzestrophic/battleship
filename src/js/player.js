import { Ship, Gameboard } from "./board.js";

class Player {
  constructor(name) {
    this.name = name || "ai";
    this.gameBoard;
  }

  // createGameboard() {}

  attackEnemy(board, coords) {
    if (this.name === "ai") {
      coords = this.aiAttackCoord();
    }

    if (
      board.prevShots.some(
        (square) => square[0] === coords[0] && square[1] === coords[1]
      )
    ) {
      console.log("can't repeat", coords);
      return false;
    }
    console.log("attacked", coords);
    console.log("boards sunk", board.receiveAttack(coords));
    return true;
  }

  aiAttackCoord() {
    let coords = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    return coords;
  }
}

export { Player };
