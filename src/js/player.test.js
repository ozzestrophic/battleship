import { Gameboard } from "./board.js";
import { Player } from "./player.js";

const board = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
const player = new Player("me");

player.attackEnemy(board, [2, 2]);
player.attackEnemy(board, [3, 2]);

test("attack enemy", () => {
  expect(board.prevShots).toEqual([
    [2, 2],
    [3, 2],
  ]);
});

test("don't repeat attack", () => {
  player.attackEnemy(board, [2, 2]);
  expect(board.prevShots).toEqual([
    [2, 2],
    [3, 2],
  ]);
});

describe("test ai attacks", () => {
  const boardAgainsAi = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
  const ai = new Player();
  ai.attackEnemy(boardAgainsAi);
  ai.attackEnemy(boardAgainsAi);

  test("ai attack enemy", () => {
    expect(boardAgainsAi.prevShots.length).toEqual(2);
  });
});
