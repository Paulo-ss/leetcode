function nextNumberFromArrayElements(digits: number[]): number[] {
  let i = digits.length - 1;
  let n = digits[i] + 1;

  if (n > 9) {
    while (digits[i] + 1 > 9) {
      digits.splice(i, 1, 0);
      i--;

      if (i < 0) {
        i = 0;
        break;
      }
    }

    if (digits[i] === 0) {
      digits.unshift(1);
    } else {
      digits.splice(i, 1, digits[i] + 1);
    }
  } else {
    digits.splice(i, 1, n);
  }

  return digits;
}

function nextNumberFromArrayElementsImproved(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 <= 9) {
      digits.splice(i, 1, digits[i] + 1);
      break;
    }

    digits.splice(i, 1, 0);
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
}

console.log({
  nextNumberFromArrayElementsImproved: nextNumberFromArrayElementsImproved([
    9, 9, 9, 9,
  ]),
});
