const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

type RomanNumber = keyof typeof romanNumbers;

function romanToInt(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currRomanNumber = s[i] as RomanNumber;
    const nextRomanNumber = s[i + 1] as RomanNumber;
    const conjunctRomanNumber: number | undefined = nextRomanNumber
      ? romanNumbers[`${currRomanNumber}${nextRomanNumber}`]
      : undefined;
    const romanNumberValue =
      conjunctRomanNumber ?? romanNumbers[currRomanNumber];

    if (conjunctRomanNumber) {
      i++;
    }

    result += romanNumberValue;
  }

  return result;
}

console.log({ romanToInt: romanToInt("MCMXCIV") });
