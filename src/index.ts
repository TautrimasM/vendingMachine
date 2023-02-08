import { vendingMachine } from "./vendingMachine";

// var firstName = process.argv[2]; // Will be set to 'Sean'
// var lastName = process.argv[3]; // Will be set to 'Worthington'
//console.log(process.argv.length);
let coinsInserted = [];
// = [
//   { num: 3, val: 20 },
//   { num: 5, val: 50 },
// ];
const priceInCents = Number(process.argv[2]);
for (let i = 3; i < process.argv.length; i++) {
  coinsInserted.push({ num: 1, val: Number(process.argv[i]) });
}
const returnedCoins = vendingMachine(priceInCents, coinsInserted);
