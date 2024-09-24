import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);

    if (!this.headNode) {
      this.tailNode = newNode;
    }

    this.headNode = newNode;
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    if (index < 0 && index >= this.size) return null;

    let currentNode = this.headNode;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.nextNode;
      counter++;
    }

    return currentNode;
  }
}
