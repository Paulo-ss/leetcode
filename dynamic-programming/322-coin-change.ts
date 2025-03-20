/*
  Dynamic problem questions
  Consists of splitting the problem, on less complex sub problems,
  storing their values, and using them later to solve the problem

  In this case, an array with the length of amount + 1, for each
  possible target that is smaller than the target, is created.
  Then, it's value get compared to each coin on the list, and that way,
  for the next targets, we can access the previous value for the target
*/
function coinChange(coins: number[], amount: number): number {
  const targets = Array.from(Array(amount + 1)).fill(amount + 1);
  targets[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let c = 0; c < coins.length; c++) {
      if (i - coins[c] >= 0) {
        targets[i] = Math.min(targets[i], 1 + targets[i - coins[c]]);
      }
    }
  }

  return targets[amount] !== amount + 1 ? targets[amount] : -1;
}

console.log({ coinChange: coinChange([1, 2, 5], 11) });
