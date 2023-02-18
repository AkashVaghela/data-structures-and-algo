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
