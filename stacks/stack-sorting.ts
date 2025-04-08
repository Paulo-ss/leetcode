function stackSorting(stack: number[]) {
  const tempStack: number[] = [];

  while (stack.length > 0) {
    const n = stack.pop()!;

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > n) {
      stack.push(tempStack.pop()!);
    }

    tempStack.push(n);
  }

  return tempStack;
}

console.log({ stackSorting: stackSorting([34, 3, 31, 98, 92, 23]) });
