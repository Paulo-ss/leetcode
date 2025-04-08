const operatorions = {
  "+": (a: string, b: string) => {
    return Number(b) + Number(a);
  },
  "-": (a: string, b: string) => {
    return Number(b) - Number(a);
  },
  "*": (a: string, b: string) => {
    return Number(b) * Number(a);
  },
  "/": (a: string, b: string) => {
    const result = Number(b) / Number(a);

    return result > 0 ? Math.floor(result) : Math.ceil(result);
  },
};

type Operators = keyof typeof operatorions;

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const operatorion: ((a: string, b: string) => number) | undefined =
      operatorions[token as Operators];

    if (operatorion) {
      if (stack.length === 0) {
        break;
      }

      stack.push(operatorion(stack.pop()!, stack.pop()!).toString());
    } else {
      stack.push(token);
    }
  }

  return stack.length > 0 && !isNaN(Number(stack[0])) ? Number(stack[0]) : 0;
}

console.log({
  evalRPN: evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
});
