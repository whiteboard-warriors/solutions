/** 
 * Implement a queue using a LinkedList
 * 
 * Source: https://www.geeksforgeeks.org/queue-set-2-linked-list-implementation/
 * Answer: https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
 */

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(data) {
        var newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        var newNode;
        if (this.head !== null) {
            newNode = this.head.data;
            this.head = this.head.next;
        }
        return newNode;
    }

    print() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

/**
 *  A LinkedList is similar to a queue in that each node has a pointer to the next
 *  
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('Queue after adding 3 items: ')
queue.print()

console.log('Dequeued: '+queue.dequeue())
console.log('Queue is now: ')
queue.print();
console.log('Dequeue: '+queue.dequeue())
console.log('Queue is now: ')
queue.print();

console.log('Dequeue: '+queue.dequeue())
console.log('Queue is now: ')
queue.print();