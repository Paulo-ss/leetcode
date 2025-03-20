function minTimeToVisitAllPoints(points: number[][]): number {
  let seconds = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const [xA, yA] = points[i];
    const [xB, yB] = points[i + 1];

    const xDiff = Math.abs(xB - xA);
    const yDiff = Math.abs(yB - yA);

    seconds += yDiff > xDiff ? yDiff : xDiff;
  }

  return seconds;
}

console.log({
  time: minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
});
console.log({
  time: minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ]),
});
