class MyStack {
  private stack: number[] = [];

  constructor(stack?: number[]) {
    this.stack = stack ?? [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    for (let i = 0; i < this.stack.length - 1; i++) {
      this.push(this.stack.shift()!);
    }

    return this.stack.shift()!;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}
