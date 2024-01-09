import { ship, Gameboard } from "./board.js";

class Player {
  constructor() {
    this.name = "ai";
    this.gameBoard;
  }

  createGameboard() {}

  attackEnemy(board, coords) {
    if (this.name === "ai") {
      coords = this.aiAttack();
    }

    if (
      board.prevShots.some(
        (square) => square[0] === coords[0] && square[1] === coords[1]
      )
    ) {
    }
  }

  aiAttack() {
    let coords = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    return this.aiAttack;
  }
}
