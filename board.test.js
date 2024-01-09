import { Ship, Gameboard } from "./board.js";

describe("test horizontal", () => {
  const ship = new Ship(3, [2, 1], [4, 1]);

  test("coordinates works horizontally", () => {
    expect(ship.head).toEqual([2, 1]);
  });

  test("test ship squares horizontally", () => {
    expect(ship.squares).toEqual([
      [2, 1],
      [3, 1],
      [4, 1],
    ]);
  });
});

describe("test vertical", () => {
  const ship = new Ship(4, [2, 1], [2, 4]);
  test("coordinates works vertically", () => {
    expect(ship.head).toEqual([2, 1]);
  });

  test("test ship squares vertically", () => {
    expect(ship.squares).toEqual([
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ]);
  });
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

describe("test gameBoard", () => {
  const gameBoard = new Gameboard([3, [2, 2], [4, 2]], [2, [4, 4], [5, 4]]);
  gameBoard.receiveAttack([5, 4]);
  gameBoard.receiveAttack([4, 4]);
  gameBoard.receiveAttack([5, 2]);
  gameBoard.receiveAttack([2, 2]);
  gameBoard.receiveAttack([3, 2]);

  test("gameBoard places ships", () => {
    expect(gameBoard.ship1.length).toEqual(2);
  });

  test("gamboard recieve correct attacks", () => {
    expect(gameBoard.ship1.hits).toBe(2);
  });

  test("gamboard recieve missed attacks", () => {
    expect(gameBoard.prevShots.length).toBe(5);
  });

  test("game not over", () => {
    expect(gameBoard.receiveAttack([5, 4])).toBe("not yet");
  });
  test("game over", () => {
    gameBoard.receiveAttack([4, 2]);

    expect(gameBoard.receiveAttack([5, 4])).toBe("game over");
  });
});
