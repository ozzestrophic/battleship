import { Gameboard } from "./board.js";
import { Player } from "./player.js";
import { aiboard, drawBoard, gameboard } from "../script.js";

function createGame() {
  const player1 = new Player("me");
  const ai = new Player();
  const playerBoard = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
  const aiBoard = new Gameboard([3, [4, 8], [6, 8]], [2, [4, 3], [4, 4]]);
  let playerTurn = true;

  return { player1, ai, playerBoard, aiBoard, playerTurn };
}

const game = createGame();

drawBoard(game.playerBoard, gameboard);
drawBoard(game.aiBoard, aiboard);

// while (true) {
//   if (game.playerTurn) {
//     const attackCoords = []; // return coords from game module
//     // function adds event listener to all blocks
//     // and returns the value of the block that is clicked

//     game.player1.attackEnemy(game.aiBoard, attackCoords);
//     // if the block is clicked before it alerts the user to choose another block

//     game.playerTurn = false;
//   } else {
//     game.ai.attackEnemy(playerBoard);

//     game.playerTurn = true;
//   }
// }
