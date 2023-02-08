# VendingMachineChange

Program that calculates amount and values of coins needed to be returned as a change for a vending machine.

## Usage

Coin ammount in the machine start of the day is set in file src/machineSet.json

If the sum of coins inserted is greater than the price, it will print "Your change is: (number of coins) x (denomination of coin), ... ." and return array of returned coins

If the sum of coins inserted is less than the price, it will print "You have not inserted enough money." and return undefined.

If the sum of coins inserted is equal to the price, it will print "You have inserted enough money, no change needed." and return undefined.

- Start program

```
npm start <priceInCents> <coin1> <coin2> ... <coinN>
```

Example:

```
npm start 86 50 20 20
```

Prints out "Your change is: 2 x 2ct."

You can run tests by:

- Invoke tests

```
npm test
```

Main function and logic is in src/vendingMachine.ts file

Input is price in cents, array of inserted coins and initial coins that the machine has at the begining.
