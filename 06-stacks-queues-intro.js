class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack using linkedlists
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('youtube'));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

// stack using an array
class Stack2 {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
    return this;
  }

  pop() {
    this.stack.pop();
    return this;
  }
}

const myStack2 = new Stack2();
console.log(myStack2.push('google'));
console.log(myStack2.push('udemy'));
console.log(myStack2.push('youtube'));
console.log(myStack2.pop());
console.log(myStack2.pop());
console.log(myStack2.pop());

// Queues using linkedllist
class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queues();
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
