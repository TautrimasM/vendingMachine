import { vendingMachine } from "../src/vendingMachine";

describe("testing vending machne", () => {
  test("expected otput is  1 x 10ct", () => {
    const priceInCents = 50;
    const coinsInserted = [{ num: 3, val: 20 }];
    expect(vendingMachine(priceInCents, coinsInserted)).toStrictEqual([
      { num: 1, val: 10 },
    ]);
  });
  test("expected otput is  1 x 10ct", () => {
    const priceInCents = 25;
    const coinsInserted = [{ num: 2, val: 20 }];
    expect(vendingMachine(priceInCents, coinsInserted)).toStrictEqual([
      { num: 1, val: 10 },
      { num: 1, val: 5 },
    ]);
  });
  test("expected otput is  1 x 10ct and 1 x 5ct", () => {
    const priceInCents = 175;
    const coinsInserted = [{ num: 1, val: 200 }];
    expect(vendingMachine(priceInCents, coinsInserted)).toStrictEqual([
      { num: 1, val: 20 },
      { num: 1, val: 5 },
    ]);
  });
  test("expected otput is  undefined", () => {
    const priceInCents = 25;
    const coinsInserted = [{ num: 1, val: 20 }];
    expect(vendingMachine(priceInCents, coinsInserted)).toBe(undefined);
  });
  test("expected otput is  undefined", () => {
    const priceInCents = 40;
    const coinsInserted = [{ num: 2, val: 20 }];
    expect(vendingMachine(priceInCents, coinsInserted)).toBe(undefined);
  });
});
