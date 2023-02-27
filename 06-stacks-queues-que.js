// q.1 Implement queue using stacks

// akash => kuldeep => harsh => harshit... (FIFO)

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  peek() {
    if (!this.head) {
      return null;
    }
    return this.first;
  }

  enqueue(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail = newNode;
    this.tail.next = null;
    this.length++;
    return this;
  }

  dequeue() {}
}

const myQueue = new Queue();
