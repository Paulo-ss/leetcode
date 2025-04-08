import Stack from "./Stack";

function isValid(s: string): boolean {
  const stack = new Stack<string>();
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const c of s) {
    if (stack.size() > 0 && brackets[c] && stack.top() === brackets[c]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.size() === 0;
}
