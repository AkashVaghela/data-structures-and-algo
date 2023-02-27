// Structure of a linked list

// 10 => 15 => 30

// let MyLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 15,
//       next: {
//         value: 30,
//         next: null,
//       },
//     },
//   },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// SINGLY LINKEDLIST
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    this.printList();
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.printList();
    return this;
  }

  insert(index, value) {
    // check for inputs
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myLinkedList = new LinkedList(1);
// myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.prepend(0);
// myLinkedList.prepend(-1);
// myLinkedList.insert(3, 1.5);
// myLinkedList.remove(3);
// myLinkedList.remove(4);

// DOUBLY LINKED LIST
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null,
    };
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    this.printList();
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null,
    };
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    this.printList();
    return this;
  }

  insert(index, value) {
    // check for inputs
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      previous: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    this.length++;
    this.printList();
  }

  /** Need to implement */

  // remove(index) {
  //   const leader = this.traverseToIndex(index - 1);
  //   const unwantedNode = leader.next;
  //   leader.next = unwantedNode.next;
  //   this.length--;
  //   this.printList();
  // }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.prepend(0);
