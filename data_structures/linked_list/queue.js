// queue is initially empty
var Queue = { front: null, back: null };

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
function Node(data, next) {
  this.data = data;
  this.next = next;
}

// add elements to queue in O(1) time
function Enqueue(element) {
  var N = new Node(element, null);
  if (Queue.back === null) {
    Queue.front = N;
    Queue.back = N;
  } else {
    Queue.back.next = N;
    Queue.back = Queue.back.next;
  }
}

// remove first element from queue in O(1) time
function Dequeue() {
  if (Queue.front !== null) {
    var first = Queue.front;
    Queue.front = Queue.front.next;
    return console.log(first.data);
  } else {
    if (Queue.back !== null) {
      Queue.back = null;
    }
    return console.log("Cannot dequeue because queue is empty");
  }
}

Enqueue("a");
Enqueue("b");
Enqueue("c");
Dequeue();

