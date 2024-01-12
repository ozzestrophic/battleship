import { Gameboard } from "./board.js";
import { Player } from "./player.js";
import {
  addListeners,
  aiboardDiv,
  drawBoard,
  gameboardDiv,
} from "../script.js";

function createGame() {
  const player1 = new Player("me");
  const ai = new Player();
  const playerBoard = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
  const aiBoard = new Gameboard([3, [4, 8], [6, 8]], [2, [4, 3], [4, 4]]);
  let playerTurn = true;

  return { player1, ai, playerBoard, aiBoard, playerTurn };
}

const game = createGame();

drawBoard(game.playerBoard, gameboardDiv);
drawBoard(game.aiBoard, aiboardDiv);

// addListeners(aiboardDiv);
