type Direction = [number, number];

const directions: Record<string, Direction> = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
};

function numIslands(grid: string[][]): number {
  let islands = 0;

  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[row].length; ++col) {
      const currCell = grid[row][col];

      const isIsland = currCell === "1";

      if (isIsland) {
        islands++;
        floodIsland(grid, row, col);
      }
    }
  }

  return islands;
}

function floodIsland(grid: string[][], row: number, col: number) {
  const isOffMap = function () {
    if (grid[row]) {
      if (grid[row][col]) {
        return false;
      }
    }

    return true;
  };

  if (isOffMap()) {
    return;
  }

  const cur = grid[row][col];

  const isWater = cur === "0";
  const isIsland = cur === "1";

  if (isWater) {
    return;
  }

  if (isIsland) {
    grid[row][col] = "0";

    for (const dir in directions) {
      const [dirRow, dirCol] = directions[dir];
      floodIsland(grid, row + dirRow, col + dirCol);
    }
  }
}

console.log({
  islands: numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
});
