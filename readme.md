Here's a sample README.md that explains the concepts and methods for both the `Queue` and `Stack` classes:

# Queue and Stack Data Structures

## Queue

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning that the first element added to the queue will be the first one to be removed. In JavaScript, a queue can be implemented using a linked list.

### Methods

#### enqueue(val)

- **Description**: Adds a new value to the end of the queue.
- **Parameters**: `val` - the value to be added to the queue.
- **Return Value**: `undefined`.
- **Behavior**: Creates a new node with the provided value and adds it to the end of the queue.

#### dequeue()

- **Description**: Removes the node from the start of the queue and returns its value.
- **Parameters**: None.
- **Return Value**: The value of the removed node.
- **Behavior**: Removes the node at the front of the queue and returns its value. Throws an error if the queue is empty.

#### peek()

- **Description**: Returns the value of the first node in the queue without removing it.
- **Parameters**: None.
- **Return Value**: The value of the first node in the queue.
- **Behavior**: Returns the value of the first node in the queue without removing it. Throws an error if the queue is empty.

#### isEmpty()

- **Description**: Returns `true` if the queue is empty, otherwise `false`.
- **Parameters**: None.
- **Return Value**: `true` if the queue is empty, otherwise `false`.
- **Behavior**: Returns `true` if the queue is empty (i.e., `first` is `null`), otherwise `false`.

## Stack

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning that the last element added to the stack will be the first one to be removed. In JavaScript, a stack can also be implemented using a linked list.

### Methods

#### push(val)

- **Description**: Adds a new value to the top of the stack.
- **Parameters**: `val` - the value to be added to the stack.
- **Return Value**: `undefined`.
- **Behavior**: Creates a new node with the provided value and adds it to the top of the stack.

#### pop()

- **Description**: Removes the node from the top of the stack and returns its value.
- **Parameters**: None.
- **Return Value**: The value of the removed node.
- **Behavior**: Removes the node at the top of the stack and returns its value. Throws an error if the stack is empty.

#### peek()

- **Description**: Returns the value of the top node in the stack without removing it.
- **Parameters**: None.
- **Return Value**: The value of the top node in the stack.
- **Behavior**: Returns the value of the top node in the stack without removing it. Throws an error if the stack is empty.

#### isEmpty()

- **Description**: Returns `true` if the stack is empty, otherwise `false`.
- **Parameters**: None.
- **Return Value**: `true` if the stack is empty, otherwise `false`.
- **Behavior**: Returns `true` if the stack is empty (i.e., `first` is `null`), otherwise `false`.

This README.md provides an overview of the concepts behind queues and stacks, as well as descriptions of the methods available in their respective implementations using linked lists.
