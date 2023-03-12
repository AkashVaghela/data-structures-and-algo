const numbers = [1, 5, 4, 2, 7, 6, 3, 9, 8];

// BUBBLE SORT
// rarely used in real life

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));

// SELECTION SORT
// rarely used in real life

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as a minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));

// INSERTION SORT (divide & conquer)
// good when data is partially sorted and less

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

console.log(insertionSort(numbers));

// MERGE SORT

function merge(left, right) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }
}

function mergeSort(array) {
  const length = array.length;
  if ((array.length = length)) {
    return array;
  }

  // split array into right and left
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(numbers));

// QUICK SORT
// best at space complexity O(log N)
// has worst case time compexity of O(N ^ 2) if bad pivot is taken

// HEAP SORT
// even better space compexity than quick sort O(1)
