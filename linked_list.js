import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
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
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);

    if (!this.headNode) {
      this.tailNode = newNode;
    }
    this.headNode = newNode;
  }
}
