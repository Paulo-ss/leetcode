function numberOfPowerfulInt(
  start: number,
  finish: number,
  limit: number,
  s: string
): number {
  if (parseFloat(s) > finish) {
    return 0;
  }

  const powerfullIntegers: string[] = [];

  if (parseFloat(s) >= start) {
    powerfullIntegers.push(s);
  }

  for (let i = start + 1; i <= finish; i++) {
    if (String(i).endsWith(s)) {
      powerfullIntegers.push(String(i));
    }
  }

  console.log({ powerfullIntegers });

  return powerfullIntegers.length;
}

console.log({ numberOfPowerfulInt: numberOfPowerfulInt(20, 1159, 5, "20") });
