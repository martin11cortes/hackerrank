/**
 * @param {array} a 
 * @param {int} d 
 */
function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0, d)]
}

/**
 * @param {array} q 
 */
function minimumBribes(q) {
  let ans = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic")
      return
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        ans++
      }
    }
  }
  console.log(ans)
}

function simpleArraySum(ar) {
  let totalSum = 0
  for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    totalSum += element
  }
  return totalSum
}

function minimumSwaps(array = []) {
  let count = 0;
  let i = 0;
  while (i < array.length) {
    const indexAt = array[i];
    const indexToBe = array[indexAt - 1];
    console.log(i, array);
    if (indexAt !== indexToBe) {
      array[i] = indexToBe;
      array[indexAt - 1] = indexAt;
      count++;
      continue;
    }
    i++;
  }
  return count;
}
// console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));

function breakingRecords(scores = []) {
  let best = 0, worst = 0, brokeHigh = 0, brokeDown = 0;
  for (let i = 0; i < scores.length; i++) {
    const e = scores[i];
    if (i === 0) {
      best = e;
      worst = e;
    }
    if (i !== 0 && e > best) {
      brokeHigh++;
      best = e;
    }
    if (i !== 0 && e < worst) {
      brokeDown++;
      worst = e;
    }
  }
  return [brokeHigh, brokeDown];
}
// console.log(breakingRecords([0, 9, 3, 10, 2, 20]));

/**
 * Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
 * Lily decides to share a contiguous segment of the bar selected such that:
 * The length of the segment matches Ron's birth month
 * The sum of the integers on the squares is equal to his birth day.
 * @param {array} s the numbers on each of the squares of chocolate
 * @param {number} d Ron's birth day
 * @param {number} m Ron's birth month
 * @returns {number} the number of ways the bar can be divided
 */
function birthday(s, d, m) {
  let auxArray = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (auxArray.length < m) {
      if (e <= d) {
        auxArray.push(e);
        if (auxArray.length === m) {
          const sum = auxArray.reduce((p, n) => p + n);
          if (sum === d) {
            count++;
          }
          auxArray.splice(0, 1);
        }
      }
    }
  }
  return count;
}

//Using the sliding window approach
function birthday2(s, d, m) {
  let count = 0;
  // Handle cases where m is greater than the number of elements in the array.
  if (m > s.length) {
    return count;
  }
  let sum = s.slice(0, m).reduce((acc, val) => acc + val);
  if (sum === d) {
    count++;
  }
  for (let i = m; i < s.length; i++) {
    sum = sum - s[i - m] + s[i];
    if (sum === d) {
      count++;
    }
  }
  return count;
}

console.log(birthday2([1, 2, 1, 3, 2], 3, 2));
// console.log(birthday([4], 4, 1));
// console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));