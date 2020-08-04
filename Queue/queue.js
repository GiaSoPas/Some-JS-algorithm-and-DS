class Queue {
    constructor(array) {
        this.items = [];
        if (array) {
            this.items = array;
        }
    }

    //enqueue() – Adds an element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    //dequeue() – Removes an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    //peek() – returns the front element of the queue
    peek() {

        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {

        return this.items.length == 0;
    }

    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }

        return str;
    }

    getBuffer() {
        return this.items.slice();
    }

}

function queueAccessNthTopNode(queue, n) {

    let queue1 = queue.getBuffer();

    if (n < 0) {
        throw 'error'
    }

    let queueBuffer = new Queue(queue1);

    while (n-- !== 0) {
        queueBuffer.dequeue();
    }
    return queueBuffer.dequeue();
}

function queueSearch(queue, element) {
    let queue1 = queue.getBuffer();
    let queueBuffer = new Queue(queue1);

    while (!queueBuffer.isEmpty()) {
        if (queueBuffer.dequeue() == element) {
            return true;
        }
    }
    return false;
}

function generatePrintBinary(n) {
    // Create an empty queue of strings 
    var q = new Queue();

    // Enqueue the first binary number 
    q.enqueue("1");

    // This loops is like BFS of a tree with 1 as root 
    // 0 as left child and 1 as right child and so on 
    while (n-- > 0) {
        // print the front of queue 
        var s1 = q.peek();
        q.dequeue();
        console.log(s1);

        // Store s1 before changing it 
        var s2 = s1;

        // Append "0" to s1 and enqueue it 
        q.enqueue(s1 + "0");

        // Append "1" to s2 and enqueue it. Note that s2 contains 
        // the previous front 
        q.enqueue(s2 + "1");
    }
}

let queue = new Queue([3,2,1]);

console.log(queueAccessNthTopNode(queue, 0)); // 3
console.log(queueAccessNthTopNode(queue, 1)); // 2

console.log(queueSearch(queue, 3)); // true
console.log(queueSearch(queue, 4)); // false

console.log(generatePrintBinary(5)); // 1 10 11 100 101

console.log(queue.printQueue()); // 3 2 1