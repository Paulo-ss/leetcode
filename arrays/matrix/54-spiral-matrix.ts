function moveRight(matrix: number[][], spiralOrder: number[]): void {
  for (let j = 0; j < matrix[0].length; j++) {
    spiralOrder.push(matrix[0][j]);
    matrix[0].splice(j, 1);
    j--;

    if (matrix[0].length === 0) {
      matrix.shift();
      break;
    }
  }
}

function moveDown(matrix: number[][], spiralOrder: number[]): void {
  if (matrix.length === 0) {
    return;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    spiralOrder.push(matrix[i][n - 1]);
    matrix[i].splice(n - 1, 1);

    if (matrix[i].length === 0) {
      matrix.splice(i, 1);
      break;
    }
  }
}

function moveLeft(matrix: number[][], spiralOrder: number[]): void {
  if (matrix.length === 0) {
    return;
  }

  const m = matrix.length;

  for (let i = matrix[m - 1].length - 1; i >= 0; i--) {
    spiralOrder.push(matrix[m - 1][i]);
    matrix[m - 1].splice(i, 1);

    if (matrix[m - 1].length === 0) {
      matrix.pop();
      break;
    }
  }
}

function moveUp(matrix: number[][], spiralOrder: number[]): void {
  if (matrix.length === 0) {
    return;
  }

  const m = matrix.length;

  for (let i = m - 1; i >= 0; i--) {
    spiralOrder.push(matrix[i][0]);
    matrix[i].splice(0, 1);

    if (matrix[i].length === 0) {
      matrix.splice(i, 1);

      if (i === 0) {
        break;
      }
    }
  }
}

function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }

  const spiral: number[] = [];

  if (matrix[0].length === 1) {
    while (matrix.length > 0) {
      moveRight(matrix, spiral);
    }

    return spiral;
  }

  while (matrix.length > 0) {
    moveRight(matrix, spiral);
    moveDown(matrix, spiral);
    moveLeft(matrix, spiral);
    moveUp(matrix, spiral);
  }

  return spiral;
}

console.log({
  spiralOrder: spiralOrder([[1], [4], [7], [8], [5], [4], [2]]),
});
