class Stack<T> {
  private stack: T[] = [];

  constructor(stack?: T[]) {
    this.stack = stack ?? [];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): T {
    return this.stack[this.size() - 1];
  }

  size(): number {
    return this.stack.length;
  }
}

export default Stack;
