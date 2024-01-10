import { GameboardSquare } from "./js/gameboardSquare.js";

customElements.define("gameboard-square", GameboardSquare);

const gameboard = document.querySelector("#gameboard-container");
const aiboard = document.querySelector("#aiboard-container");

function drawBoard(board, container) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const square = document.createElement("gameboard-square");
      square.id = `[${j}, ${i}]`;
      for (const key in board) {
        if (!board[key].squares) {
          continue;
        }
        if (
          board[key].squares.some(
            (square) => square[0] === j && square[1] === i
          )
        ) {
          square.shadowRoot.querySelector("div").classList.add("ship");
        }
      }

      square.addEventListener("click", registerClick);
      container.appendChild(square);
    }
  }
}

function registerClick(event) {
  event.target.shadowRoot.querySelector("div").classList.add("shot");
  console.log(event.target.id);
  return event.target.id;
}

export { drawBoard, gameboard, aiboard };
