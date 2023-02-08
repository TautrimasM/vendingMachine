import { vendingMachine } from "./vendingMachine";

let coinsInserted = [];

const priceInCents = Number(process.argv[2]);
for (let i = 3; i < process.argv.length; i++) {
  coinsInserted.push({ num: 1, val: Number(process.argv[i]) });
}
const returnedCoins = vendingMachine(priceInCents, coinsInserted);
