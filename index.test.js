import { Ship, Gameboard } from "./index.js";

test("coordinates works horizontally", () => {
  const ship = new Ship(3, [2, 1], [4, 1]);

  expect(ship.head).toEqual([2, 1]);
});

test("test ship squares horizontally", () => {
  const ship = new Ship(3, [2, 1], [4, 1]);
  expect(ship.squares).toEqual([
    [2, 1],
    [3, 1],
    [4, 1],
  ]);
});
test("test ship squares vertically", () => {
  const ship = new Ship(4, [2, 1], [2, 4]);
  expect(ship.squares).toEqual([
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ]);
});

test("coordinates works vertically", () => {
  const ship = new Ship(4, [2, 1], [2, 4]);

  expect(ship.head).toEqual([2, 1]);
});

test("length works", () => {
  const ship = new Ship(2, [2, 1], [3, 1]);

  expect(ship.length).toBe(2);
});

test("hits works", () => {
  const ship = new Ship(3, [2, 1], [4, 1]);
  ship.hit();

  expect(ship.hits).toBe(1);
});

test("sunk works", () => {
  const ship = new Ship(3, [2, 1], [4, 1]);
  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});

describe("test gameboard", () => {
  test("gameBoard places ships", () => {
    const gameBoard = new Gameboard([3, [2, 2], [4, 2]], [4, [4, 4], [7, 4]]);
    expect(gameBoard.ship1.length).toEqual(4);
  });

  test("gamboard recieve correct attacks", () => {
    const gameBoard = new Gameboard([3, [2, 2], [4, 2]], [4, [4, 4], [7, 4]]);
    gameBoard.receiveAttack([5, 4]);
    gameBoard.receiveAttack([4, 4]);
    gameBoard.receiveAttack([5, 2]);

    expect(gameBoard.ship1.hits).toBe(2);
  });

  test("gamboard recieve missed attacks", () => {
    const gameBoard = new Gameboard([3, [2, 2], [4, 2]], [4, [4, 4], [7, 4]]);
    gameBoard.receiveAttack([5, 4]);
    gameBoard.receiveAttack([8, 4]);
    gameBoard.receiveAttack([5, 2]);

    expect(gameBoard.missedShots.length).toBe(2);
  });

  test("game not over", () => {
    const gameBoard = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
    gameBoard.receiveAttack([2, 2]);
    gameBoard.receiveAttack([3, 2]);
    gameBoard.receiveAttack([4, 4]);

    expect(gameBoard.receiveAttack([5, 4])).toBe("not yet");
  });
  test("game over", () => {
    const gameBoard = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
    gameBoard.receiveAttack([2, 2]);
    gameBoard.receiveAttack([3, 2]);
    gameBoard.receiveAttack([4, 2]);
    gameBoard.receiveAttack([4, 4]);

    expect(gameBoard.receiveAttack([5, 4])).toBe("game over");
  });
});
