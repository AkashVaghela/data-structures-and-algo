// q1. return first recurring element from an array

// array = [2,5,5,2,3,5,1,2,4] returns 2
// array = [2,3,4,5] returns undefined

function firstRecurringItem1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
} // O(n ^ 2)

console.log(firstRecurringItem1([1, 2, 3, 4, 5]));
console.log(firstRecurringItem1([2, 5, 5, 2, 3, 5, 1, 2, 4]));

function firstRecurringItem2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // O(n)

console.log(firstRecurringItem2([2, 5, 5, 2, 3, 5, 1, 2, 4]));

// 2. given 2 arrays, create a function that let's user know (true/ false) whether these two arrays contain any common item.

// arr1 = ['a', 'b', 'x] & arr1 = ['t', 's', 'h] return false
// arr1 = ['a', 'b', 'x] & arr1 = ['t', 'x', 'h] return true

function containsCommonItem1(item1, item2) {
  for (let i = 0; i < item1.length; i++) {
    for (let j = i + 1; j < item2.length; j++) {
      if (item1[i] === item2[j]) {
        return true;
      }
    }
  }
  return false;
} // O(n * m)

console.log(containsCommonItem1(['a', 'b', 'c'], ['t', 'x', 'h']));
console.log(containsCommonItem1(['a', 'b', 'c'], ['t', 'x', 'a']));

function containsCommonItem2(item1, item2) {
  let map = {};
  for (let i = 0; i < item1.length; i++) {
    if (!map[item1[i]]) {
      const item = item1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < item2.length; j++) {
    if (map[item2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem2(['a', 'b', 'c'], ['t', 'x', 'h']));
console.log(containsCommonItem2(['a', 'b', 'c'], ['t', 'x', 'a']));
