import { GameboardSquare } from "./js/gameboardSquare.js";

customElements.define("gameboard-square", GameboardSquare);

const gameboardDiv = document.querySelector("#gameboard-container");
const aiboardDiv = document.querySelector("#aiboard-container");

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

      container.appendChild(square);
    }
  }
}

async function addListeners(container) {
  Array.from(container.childNodes).forEach((child) => {
    child.addEventListener("click", registerClick);
  });
}

function registerClick(event) {
  event.target.shadowRoot.querySelector("div").classList.add("shot");

  // send data to the gameboard class?
  console.log(event.target.id);
  return event.target.id;
}

function waitForPlayerClick() {
  return new Promise((resolve) => {
    document
      .querySelector("#gameboard-container")
      .addEventListener("click", (event) => {
        const coords = event.target.id;
        resolve(coords);
      });
  });
}

async function startGame() {
  const clickedCoords = await waitForPlayerClick();
  console.log("Player clicked", clickedCoords);

  console.log("continue");
}

startGame();

export { drawBoard, gameboardDiv, aiboardDiv, addListeners };
