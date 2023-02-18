// Q1. reverse a string "hello how are you?"

function reverseString1(string) {
  // check for an input
  if (!string || string.length < 2 || typeof string !== 'string') return;

  let newArray = [];
  const letters = string.split('');

  for (let i = letters.length - 1; i >= 0; i--) {
    newArray.push(letters[i]);
  }

  return newArray.join('');
}

const reverseString2 = (string) => {
  return string.split('').reverse().join('');
};

const reverseString3 = (str) => [...str].reverse().join('');

console.log(reverseString1('hello how are you?'));
console.log(reverseString2('hello how are you?'));
console.log(reverseString3('hello how are you?'));

// Q2. merge two sorted arrays into one sorted array

function mergeSortedArrays1(array1, array2) {
  // check for input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays1([1, 2], [3, 4]));
