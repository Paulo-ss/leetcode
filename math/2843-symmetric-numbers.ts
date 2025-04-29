function sumAllDigits(s: string): number {
  let result = 0;

  for (const d of s) {
    result += Number(d);
  }

  return result;
}

function countSymmetricIntegers(low: number, high: number): number {
  let symmetricNumbers = 0;

  for (let i = low; i <= high; i++) {
    const stringNumber = i.toString();

    if (stringNumber.length % 2 === 0) {
      const firstHalf = stringNumber.substring(0, stringNumber.length / 2);
      const secondHalf = stringNumber.substring(stringNumber.length / 2);

      if (sumAllDigits(firstHalf) === sumAllDigits(secondHalf)) {
        console.log({ firstHalf, secondHalf });
        symmetricNumbers++;
      }
    }
  }

  return symmetricNumbers;
}

console.log({ countSymmetricIntegers: countSymmetricIntegers(1200, 1230) });
