function plotTanksForHouses(string: string) {
  if (!string.includes("-")) {
    return -1;
  }

  if (!string.includes("H")) {
    return 0;
  }

  const arr = string.split("");

  let tanks = 0;
  let lastTankIndex = string.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "H") {
      let hasLeftPlot = false;
      let hasRightPlot = false;

      if (i !== 0 && arr[i - 1] === "-") {
        hasLeftPlot = true;
      }

      if (i !== string.length - 1 && arr[i + 1] === "-") {
        hasRightPlot = true;
      }

      if (!hasLeftPlot && !hasRightPlot) {
        return -1;
      }

      if (hasRightPlot && (lastTankIndex !== i - 1 || !hasLeftPlot)) {
        tanks++;
        lastTankIndex = i + 1;
      }

      if (hasLeftPlot && !hasRightPlot && lastTankIndex !== i - 1) {
        tanks++;
        lastTankIndex = i - 1;
      }
    }
  }

  return tanks;
}

console.log({ result: plotTanksForHouses("-HH-HHH-") }); // -1
console.log({ result: plotTanksForHouses("-H-HH--") }); // 2
console.log({ result: plotTanksForHouses("-H-H-H-H--") }); // 2
console.log({ result: plotTanksForHouses("H") }); // -1
console.log({ result: plotTanksForHouses("H------") }); // 1
console.log({ result: plotTanksForHouses("-----") }); // 0
