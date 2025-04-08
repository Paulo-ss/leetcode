class MinStack {
  private stack: number[] = [];
  private minNumIndexes: number[] = [];

  constructor() {
    this.stack = [];
    this.minNumIndexes = [0];
  }

  push(val: number): void {
    this.stack.push(val);

    if (this.stack.length === 1) {
      this.minNumIndexes.push(0);
      return;
    }

    if (val < this.stack[this.minNumIndexes[this.minNumIndexes.length - 1]]) {
      this.minNumIndexes.push(this.stack.length - 1);
    }
  }

  pop(): void {
    if (
      this.minNumIndexes[this.minNumIndexes.length - 1] ===
      this.stack.length - 1
    ) {
      this.minNumIndexes.pop();
    }

    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.stack[this.minNumIndexes[this.minNumIndexes.length - 1]];
  }
}

const stack = new MinStack();
stack.push(2147483646);
stack.push(2147483646);
stack.push(2147483647);

console.log({ top: stack.top() });

stack.pop();

console.log({ min: stack.getMin() });

stack.pop();

console.log({ min: stack.getMin() });

stack.pop();

stack.push(2147483647);

console.log({ top: stack.top() });
console.log({ min: stack.getMin() });

stack.push(-2147483648);

console.log({ top: stack.top() });
console.log({ min: stack.getMin() });

stack.pop();

console.log({ min: stack.getMin() });
