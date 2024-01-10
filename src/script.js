import { GameboardSquare } from "./js/gameboardSquare.js";

customElements.define("gameboard-square", GameboardSquare);

const gameboard = document.querySelector("#gameboard-container");

console.log(gameboard);

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const square = document.createElement("gameboard-square");
    gameboard.appendChild(square);
  }
}
