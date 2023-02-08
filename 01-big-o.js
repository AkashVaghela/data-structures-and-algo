// big O (big O asymptotic analysis)

// a good code has these things:
// 1. readability
// 2. scalability (speed(big O) OR "time complexity", memory OR "space complexity")
// 3. maintainability

// big O simply means as input size grows bigger and bigger, how slow out function becomes. basically it shows the relation between input size and performance of the code.

// big O measurments: O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!)

// big O does not measure in seconds, it measures how fast our runtime of operation grows with respect to inputs

// **********
// O(n)

const nemo = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel'];
const largeArray = new Array(100).fill('nemo');

function findNemo(array) {
  //   let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log('RUNNING');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  //   let t1 = performance.now();
  //   console.log(`Function took ${t1 - t0} milliseconds to fine Nemo.`);
}

findNemo(largeArray); // big O of this function is O(100) which is linear time O(n).

// **********
// O(1)

function findElement(array) {
  console.log(array[0]);
}

findElement(nemo); // big O of this function is O(1) which is constant time O(1).

const boxes = [1, 3, 4, 6, 7];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // big O of this function is O(2) which is constant time O(1).

// **********
// challenge #1

function funChallenge(input, anotherFunction) {
  let a = 10; // O(1)
  a = 50 + 5; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }

  return a; // O(1)
}

funChallenge(boxes, () => {}); // big O of this function is BIG O(3 + 4n) or just BIG O(n)

// **********
// challenge #2

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

anotherFunChallenge(boxes); // big O of this function is BIG O(4 + 7n) or just BIG O(n)

/* 
RULES TO CALCULATE BIG O IN AN INTERVIEW
rule 1: worst case
rule 2: remove constants
rule 3: different terms for input
rule 4: drop non dominants (eg. for BIG O(n + n^2), we write BIG O(n^2) as "n^2" is more dominant then "n")
*/

function compressBoxTwice(boxes, boxes2) {
  boxes.forEach((box) => console.log(box));

  boxes2.forEach((box) => console.log(box));
}

compressBoxTwice(boxes, boxes); // big O of this function is BIG O(n + m) (rule #3)

// **********
// O(n^2)

// log all pais of an array
const pairs = [1, 2, 3, 4, 5];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairs(pairs); // big O of this function is BIG O(n * n) or BIG O(n^2) or Quadratic time

/*
for different loops use n + m or BIG O(n + m)
for nested loops use n * n or BIG O(n^2)
*/

// **********
// O(n!) factorial time

// **********
// SPACE COMPLEXITY

// program generally uses "heap" and "stack" to run a program.
// heap is used to store variables where as stack is used for function calls
