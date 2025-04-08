/*
  Time complexity: 0(N * M) Quadratic - n = tickets.length, and m = tickets for position k
  Space complexity: 0(1) Contant - because i'm only keeping track of two variables
*/
function timeRequiredToBuy(tickets: number[], k: number): number {
  let seconds = 0;

  while (tickets[k] > 0) {
    const t = tickets.shift()! - 1;

    if (t > 0) {
      tickets.push(t);
    } else if (k === 0) {
      seconds++;
      break;
    }

    if (k === 0) {
      k = tickets.length - 1;
    } else {
      k--;
    }

    seconds++;
  }

  return seconds;
}

/*
  Time complexity: 0(N) Linear - only one iteration over the tickets array
  Space complexity: 0(1) Contant - because i'm only keeping track of one variable
*/
function timeRequiredToBuyLinear(tickets: number[], k: number): number {
  let seconds = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      seconds += Math.min(tickets[i], tickets[k]);
    } else {
      seconds += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return seconds;
}

console.log({
  timeRequiredToBuy: timeRequiredToBuyLinear([84, 49, 5, 24, 70, 77, 87, 8], 3),
});
