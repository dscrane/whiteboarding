// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {return null;}
    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next;
    }
    return node;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data);
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    const previous = this.getAt(index-1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {return}
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = previous.next;
    }

    previous.next = null;
  }

  removeAt(index) {
    if (!this.head) {return;}
    if (index > this.size) {return;}
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  clear() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
