function invalidTransactions(transactions: string[]): string[] {
  const invalidTransactions: string[] = [];

  for (let i = 0; i < transactions.length; i++) {
    const [name, time, amount, city] = transactions[i].split(",");

    if (Number(amount) > 1000) {
      invalidTransactions.push(transactions[i]);
      continue;
    }

    for (let j = 0; j < transactions.length; j++) {
      if (j !== i) {
        const [n, t, a, c] = transactions[j].split(",");

        if (
          name === n &&
          city !== c &&
          Math.abs(Number(time) - Number(t)) <= 60
        ) {
          invalidTransactions.push(transactions[i]);
          break;
        }
      }
    }
  }

  return invalidTransactions;
}

console.log({
  invalidTransactions: invalidTransactions([
    "alex,676,260,bangkok",
    "bob,656,1366,bangkok",
    "alex,393,616,bangkok",
    "bob,820,990,amsterdam",
    "alex,596,1390,amsterdam",
  ]),
});
