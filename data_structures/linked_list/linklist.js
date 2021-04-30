//node class
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
// linkedlist class
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = null;
  }
  //add element
  add(element) {
    //create a new node
    let node = new Node(element);
    let current; //store current node
    if (this.head === null) {
      //check if list is empty
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        //till tail of list
        current = current.next;
      }
      //add node
      current.next = node;
    }
    this.size++;
  }
  insertAt(element, index) {
    //check if index is valid
    if (index > 0 && index > this.size) {
      return false;
    } else {
      //create a new node
      let node = new Node(element);
      let curr, prev;

      curr = this.head;
      //add node at first index
      if (index === 0) {
        node.next = head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        //adding elemnt
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  //remove at an index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      // check if index is valid
      return -1;
    } else {
      let curr = this.head,
        prev = curr,
        it = 0;
      if (index === 0) {
        //if its the first index
        this.head = curr.next;
      } else {
        while (it < index) {
          //iterate till the index is found
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  //remove an element
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      } else {
        prev = current;
        current = current.next;
      }
    }
    return -1;
  }
  //printlist
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const ll = new Linkedlist();
ll.add(3);
ll.add(4);
ll.add(42);
ll.add(14);
// ll.insertAt(5, 1);
// ll.removeAt(2);
ll.removeElement(3);
ll.printList();
