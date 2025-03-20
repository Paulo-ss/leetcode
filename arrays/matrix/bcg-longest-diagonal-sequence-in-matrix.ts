function longestDiagonalSequence(matrix: number[][]) {
  let bestLength = 0;

  function isOffRange(i: number, j: number) {
    const iInRange = i >= 0 && i < matrix.length;
    const jInRange = j >= 0 && matrix[i] && j < matrix[i].length;

    return !iInRange && !jInRange;
  }

  const sequence = [1, 2, 0];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        const directions = [
          [-1, -1],
          [-1, 1],
          [1, 1],
          [1, -1],
        ];

        for (const [dirRow, dirCol] of directions) {
          let row = i + dirRow;
          let col = j + dirCol;
          let currentLength = 1;
          let currentSequenceIndex = 0;

          while (
            !isOffRange(row, col) &&
            matrix[row][col] === sequence[currentSequenceIndex + 1]
          ) {
            currentLength++;
            row += dirRow;
            col += dirCol;
            currentSequenceIndex++;

            if (currentSequenceIndex === 2) {
              currentSequenceIndex = -1;
            }
          }

          if (currentLength > bestLength) {
            bestLength = currentLength;
          }
        }
      }
    }
  }

  return bestLength;
}

console.log({
  longestDiagonalSequence: longestDiagonalSequence([
    [1, 2, 0, 0, 2, 1],
    [2, 2, 2, 0, 2, 2],
    [1, 1, 0, 0, 1, 2],
    [2, 0, 1, 1, 2, 0],
    [0, 2, 1, 0, 2, 1],
    [0, 2, 1, 0, 2, 1],
  ]),
});
