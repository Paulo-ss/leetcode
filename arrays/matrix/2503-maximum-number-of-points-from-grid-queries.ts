const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function maxPoints(grid: number[][], queries: number[]): number[] {
  const queriesPoints: number[] = [];
  const visited = new Set<string>();
  visited.add(`0,0`);

  let queue: number[][] = [[0, 0]];

  const isInsideGrid = (row: number, col: number) => {
    const isRowInRange = row >= 0 && row < grid.length;
    const isColInRange = col >= 0 && col < grid[row]?.length;

    return isRowInRange && isColInRange;
  };

  for (let i = 0; i < queries.length; i++) {
    if (grid[0][0] >= queries[i]) {
      queriesPoints.push(0);
      continue;
    }

    let points = 1;

    while (queue.length) {
      let [row, col] = queue.shift()!;

      for (const [dirRow, dirCol] of directions) {
        if (
          isInsideGrid(row + dirRow, col + dirCol) &&
          !visited.has(`${row + dirRow},${col + dirCol}`) &&
          !queue.some(([i, j]) => i === row + dirRow && j === col + dirCol) &&
          queries[i] > grid[row + dirRow][col + dirCol]
        ) {
          queue.push([row + dirRow, col + dirCol]);
        }
      }

      if (queries[i] > grid[row][col] && !visited.has(`${row},${col}`)) {
        points++;
      }

      visited.add(`${row},${col}`);
    }

    queriesPoints.push(points);
    visited.clear();
    visited.add("0,0");
    queue = [[0, 0]];
  }

  return queriesPoints;
}

console.log({
  maxPoints: maxPoints(
    [
      [1, 2, 3],
      [2, 5, 7],
      [3, 5, 1],
    ],
    [5, 6, 2]
  ),
});
