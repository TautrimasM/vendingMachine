# VendingMachineChange

Program that calculates amount and values of coins needed to be returned as a change for a vending machine.

## Usage

Coin ammount in the machine in start of the day is set in file src/machineSet.json

You can set price of product and inserted coins in index.ts file and then start program.

It prints to console a nice text of how many and what coins it returns.

It also returns an array containing returned coins.

- Start program

```
npm start
```

You can run tests by:

- Invoke tests

```
npm test
```

Main function and logic is in src/vendingMachine.ts file

Input is price in cents, array of inserted coins and initial coins that a machine has at the begining.

Default coin ammount set is in the machineSet.json file
