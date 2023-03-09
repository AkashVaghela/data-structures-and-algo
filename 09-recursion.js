let counter = 0;

// it will return undefined
function repeat1() {
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  repeat1();
}

// it will return 'done!'
function repeat2() {
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return repeat1();
}

// q1. find factorial for a given number using recursion and loops

// time complexity: O(N)
const factorialWithRecursion = (number) => {
  // 1. base case
  if (number === 2) return 2;
  // 2. recursive case
  return number * factorialWithRecursion(number - 1);
};

// time complexity: O(N)
const factorialWithLoops = (number) => {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
};

console.log(factorialWithRecursion(5));
console.log(factorialWithLoops(5));

// q2. given a number N return the index value of fibonacci sqeuence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

// time complexity: O(2^N) (exponential)
const fibonacciWithRecursion = (number) => {
  if (number < 2) {
    return number;
  }
  return (
    fibonacciWithRecursion(number - 1) + fibonacciWithRecursion(number - 2)
  );
};

// time complexity: O(N)
const fibonacciWithIteration = (number) => {
  let arr = [0, 1];
  for (let i = 2; i < number + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[number];
};

console.log(fibonacciWithRecursion(8));
console.log(fibonacciWithIteration(8));
