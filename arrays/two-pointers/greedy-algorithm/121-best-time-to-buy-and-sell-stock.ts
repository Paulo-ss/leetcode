/*
  A greedy algorithm consists on making the most optimal choise
  locally (that is checking all the possible options) 
  before proceeding to the next options
*/
function maxProfit(prices: number[]): number {
  let l = 0;
  let r = 0;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }

    r++;
  }

  return maxProfit;
}

console.log({ maxProfit: maxProfit([7, 1, 5, 3, 6, 4]) });
console.log({ maxProfit: maxProfit([2, 4, 1]) });
