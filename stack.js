/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val); // Create a new node with the provided value
    if (!this.first) {
      // If the stack is empty, set the new node as the head
      this.first = newNode;
      this.last = newNode;
    } else {
      // If the stack is not empty, set the new node's next to the current head
      newNode.next = this.first;
      // Update the head to be the new node
      this.first = newNode;
    }
    this.size += 1;
    return undefined; // Return undefined as specified
  }
  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      throw new Error("Stack is empty!");
    }
    let popped = this.first;
    this.first = popped.next;
    if (!this.first) {
      this.last = null;
    }
    this.size -= 1;
    return popped.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) {
      throw new Error("Queue is empty");
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.first;
  }
}

module.exports = Stack;
