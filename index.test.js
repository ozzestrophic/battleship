import { Ship } from "./index.js";

test("length works", () => {
  const ship = new Ship(2);

  expect(ship.length).toBe(2);
});

test("hits works", () => {
  const ship = new Ship(3);
  ship.hit();

  expect(ship.hits).toBe(1);
});

test("sunk works", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.sunk).toBe(true);
});
