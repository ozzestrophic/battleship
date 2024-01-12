import { Gameboard } from "./board.js";
import { Player } from "./player.js";
import {
  aiboardDiv,
  drawBoard,
  gameboardDiv,
  waitForPlayerTurn,
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

let gameRunning = true;
let playerTurn = true;
let aiTurn = false;

while (gameRunning) {
  while (playerTurn) {
    const coords = await waitForPlayerTurn();
    const attackStatus = game.player1.attackEnemy(game.aiBoard, coords);
    if (attackStatus === "didn't Attack") {
      console.log("try a different square");
    } else if (attackStatus === "Gameover") {
      console.log("GAMEOVER");
      playerTurn = false;
      gameRunning = false;
    } else if (attackStatus === "not yet") {
      playerTurn = false;
      aiTurn = true;
    }
  }
  while (aiTurn) {
    const attackStatus = game.ai.attackEnemy(game.playerBoard);
    if (attackStatus === "didn't Attack") {
      console.log("try a different square");
    } else if (attackStatus === "Gameover") {
      console.log("GAMEOVER");
      aiTurn = false;
      gameRunning = false;
    } else if (attackStatus === "not yet") {
      aiTurn = false;
      playerTurn = true;
    }
  }
}
