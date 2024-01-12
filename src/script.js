import { GameboardSquare } from "./js/gameboardSquare.js";

customElements.define("gameboard-square", GameboardSquare);

const gameboardDiv = document.querySelector("#gameboard-container");
const aiboardDiv = document.querySelector("#aiboard-container");

function drawBoard(board, container) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const square = document.createElement("gameboard-square");
      square.id = `${j}${i}`;
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

function listenToPlayerClick() {
  return new Promise((resolve) => {
    document
      .querySelector("#aiboard-container")
      .addEventListener("click", function addEVents(event) {
        event.target.shadowRoot.querySelector("div").classList.add("shot");
        const coords = Array.from(event.target.id, Number);

        // remove event listeners to prepare for next turn
        document
          .querySelector("#aiboard-container")
          .removeEventListener("click", addEVents);

        resolve(coords);
      });
  });
}

async function waitForPlayerTurn() {
  const clickedCoords = await listenToPlayerClick();

  return clickedCoords;
}

function aiAttackDom(coords) {
  let id = coords.join("");
  const square = document.getElementById(id);
  square.shadowRoot.querySelector("div").classList.add("shot");
}

const resetBtn = document.getElementById("resetBtn");
const gameOverSpan = document.getElementById("gameOver");

export {
  drawBoard,
  gameboardDiv,
  aiboardDiv,
  waitForPlayerTurn,
  aiAttackDom,
  resetBtn,
  gameOverSpan,
};
