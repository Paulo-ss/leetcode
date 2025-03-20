function letterCasePermutation(s: string): string[] {
  let permutations: string[] = [""];
  const strArr = s.split("");

  for (const c of strArr) {
    const curr: string[] = [];

    if (/\D/.test(c)) {
      for (const o of permutations) {
        curr.push(o + c.toLowerCase());
        curr.push(o + c.toUpperCase());
      }
    } else {
      for (const o of permutations) {
        curr.push(o + c);
      }
    }

    permutations = curr;
  }

  return permutations;
}

console.log({ letterCasePermutation: letterCasePermutation("a1b2") });
