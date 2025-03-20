function longestMountain(arr: number[]): number {
  if (arr.length < 3) {
    return 0;
  }

  let longestMountain = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    let currMountainLength = 0;
    let l = i - 1;
    let r = i + 1;
    let foundRight = false;

    while (l >= 0 && arr[l] < arr[l + 1]) {
      currMountainLength++;
      l--;
    }

    while (currMountainLength > 0 && r < arr.length && arr[r - 1] > arr[r]) {
      currMountainLength++;
      foundRight = true;
      r++;
    }

    if (foundRight && currMountainLength + 1 > longestMountain) {
      longestMountain = currMountainLength + 1;
    }
  }

  return longestMountain;
}

function longestMountain2(arr: number[]): number {
  let longestMountain = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let l = i - 1;
      let r = i + 1;

      while (l >= 0 && arr[l] > arr[l - 1]) {
        l--;
      }

      while (r < arr.length && arr[r] > arr[r + 1]) {
        r++;
      }

      longestMountain = Math.max(longestMountain, r - l + 1);
    }
  }

  return longestMountain;
}

function longestMountain3(arr: number[]): number {
  let longestMountain = 0;
  let i = 1;

  while (i < arr.length - 1) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let l = i - 1;
      let r = i + 1;

      while (l >= 0 && arr[l] > arr[l - 1]) {
        l--;
      }

      while (r < arr.length && arr[r] > arr[r + 1]) {
        r++;
      }

      longestMountain = Math.max(longestMountain, r - l + 1);
      i = r + 1;
    } else {
      i++;
    }
  }

  return longestMountain;
}

console.log({ longestMountain: longestMountain3([2, 1, 4, 7, 3, 2, 5]) });
