import { vendingMachine } from "./vendingMachine";

const priceInCents = 275;
const coinsInserted = [
  { num: 3, val: 20 },
  { num: 5, val: 50 },
];
const returnedCoins = vendingMachine(priceInCents, coinsInserted);
