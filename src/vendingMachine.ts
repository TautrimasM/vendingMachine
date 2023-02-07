import machineSettings from "./machineSet.json";
export const coinsInMachine = machineSettings.coins;

interface Coin {
  num: number;
  val: number;
}

const insertCoinsIntoMachine = (coinsInserted: Coin[]) => {
  coinsInserted.forEach((coin) => {
    coinsInMachine.forEach((coinInMachine) => {
      if (coinInMachine.val === coin.val) {
        coinInMachine.num += coin.num;
      }
    });
  });
};

const calculateSum = (coins: Coin[]) => {
  let sum = 0;
  coins.forEach((coin) => {
    sum = sum + coin.val * coin.num;
  });
  return sum;
};

const calculateChangeInCoins = (
  changeInCents: number,
  coinsInMachine: Coin[]
) => {
  let changeInCoins: Coin[] = [];
  for (let i = 0; i < coinsInMachine.length; i++) {
    const coin = coinsInMachine[i];

    // if there are no coins of certain value, they are excluded
    if (coin.num > 0 && coin.val <= changeInCents) {
      let remainingChange = changeInCents % coin.val;
      let numOfCoins = (changeInCents - remainingChange) / coin.val;

      //if less coins available than needed then, we use only as much as are available
      while (coin.num <= numOfCoins) {
        numOfCoins--;
        remainingChange += coin.val;
      }

      coinsInMachine[i].num = coin.num - numOfCoins;
      changeInCoins.push({ num: numOfCoins, val: coin.val });
      changeInCents = remainingChange;
    }
  }
  return changeInCoins;
};

const logChange = (change: Coin[]) => {
  let changeText = `Your change is:`;
  change.forEach((coin) => {
    if (coin.val < 100) {
      changeText += ` ${coin.num} x ${coin.val}ct,`;
    } else {
      changeText += ` ${coin.num} x ${coin.val}€,`;
    }
  });
  changeText = changeText.substring(0, changeText.length - 1);
  changeText = changeText + ".";
  console.log(changeText);
};
export const vendingMachine = (
  priceInCents: number,
  coinsInserted: Coin[],
  coinsInMachine: Coin[]
) => {
  insertCoinsIntoMachine(coinsInserted);
  const sumInserted = calculateSum(coinsInserted);
  const changeInCents = sumInserted - priceInCents;
  const change = calculateChangeInCoins(changeInCents, coinsInMachine);
  logChange(change);
  return change;
};
