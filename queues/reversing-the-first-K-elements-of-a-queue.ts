/*
  Time complexity: 0(N) Linear - O(K) + O(K) + O(N - K) simplifies to O(N)
  Space complexity: 0(K) - we are only storing a queue with the max size o K
*/
function reverseFirstKElementsOfAQueue(queue: number[], k: number): number[] {
  if (queue.length === 0) {
    return queue;
  }

  const stack: number[] = [];

  // O(K) loop
  for (let i = 0; i < k; i++) {
    stack.push(queue.shift()!);
  }

  // O(K) loop
  while (stack.length > 0) {
    queue.push(stack.pop()!);
  }

  // O(N - K) loop
  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift()!);
  }

  return queue;
}

console.log({
  reverseFirstKElementsOfAQueue: reverseFirstKElementsOfAQueue(
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    5
  ),
});
