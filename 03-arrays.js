const names = ['kuldeep', 'subham', 'harsh'];

// push
names.push('harshit'); // O(1) or O(n)
console.log(names);

// pop
names.pop(); // O(1)
console.log(names);

// unshift (adds to the front)
names.unshift('harshit'); // O(n)
console.log(names);

// shift(removes from the front)
names.shift(); // O(n)
console.log(names);

// 1. reference type
const obj1 = { value: 69 };
const obj2 = obj1;
const obj3 = { value: 69 };

obj1 === obj2; // true
obj1 === obj3; // false
obj1.value === obj2.value; // true
obj1.value === obj3.value; // false

// 2. context vs scope
// scope is created when encounters with { }
// Scope => pertains to the visibility of the variables.
// Context => refers to the object within which a function is executed.

// 3. instantiation
class Troop {
  constructor(name, type) {
    console.log(this, 'troop');
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`My name is  ${this.name} and I am type ${this.type}`);
  }
}

class Wizzard extends Troop {
  constructor(name, type) {
    super(name, type);
    console.log(this, 'wizzard');
  }

  play() {
    console.log(`I am type ${this.type}`);
  }
}

const wizzard1 = new Wizzard('shelby', 'healer');

// 1. building arrays
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('hii');
myArray.push('how');
myArray.push('are');
myArray.push('you?');
myArray.push('??');
// console.log(myArray.get(0));
myArray.pop();
myArray.delete(1);
console.log(myArray);

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
