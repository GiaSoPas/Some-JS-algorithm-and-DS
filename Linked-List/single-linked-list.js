class Node {
    constructor(element) {

        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add(element) – It adds an element at the end of list.

    add(element) {

        let node = new Node(element);

        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    //insertAt(element, index) – It inserts an element at the given index in a list.
    insertAt(element, index) {

        if (index > this.size) {
            return false;
        }

        let node = new Node(element);

        let current = this.head;
        let prev;

        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let it = 0;

            while (it < index) {
                it++;
                prev = current;
                current = current.next

            }

            prev.next = node;
            node.next = current;
        }

        this.size++;
    }

    //removeFrom(index) – It removes and returns an element from the list from
    //the specified index
    removeFrom(index) {
        if (index > this.size) {
            return false;
        }

        let current = this.head;
        let prev = current;
        let it = 0;

        if (index == 0) {
            this.head = this.head.next;
        } else {
            while (it < index) {
                
                prev = current;
                current = current.next;
                
                it++;
            }
            prev.next = current.next;
        }

        this.size++;
        return current.element;
    }

    //removeElement(element) – This method removes element from the list. 
    //It returns the removed element, or if its not found it returns -1.
    //
    removeElement(element) {

        let current = this.head;
        let prev = null;

        while (current != null) {

            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }

            prev = current;
            current = current.next;
            

        }

        return false;
    }

    // indexOf(element) – it returns the index of a given element, 
    //if the element is in the list.

    indexOf(element){
        let current = this.head;
        let count = 0;

        while(current != null){

            if(current.element == element){
                return count;
            }
            current = current.next;
            count++;
        }

        return false;
    }

    isEmpty(){
        return this.size == 0;
    }

    sizeofList(){
        console.log(this.size);
    }

    printList(){
        let current = this.head;
        let str = "";

        while(current){
            str += current.element + " ";
            current = current.next;

        }

        console.log(str);
    }

    //Time Complexity: O(n)
    //Space Complexity: O(1)
    reverseSingleLinkedList(list){
        let node = this.head;
        let prev = null;
    
        while(node){
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
    
        this.head = prev;
    
    }
}

//Time Complexity: O(n)
//Space Complexity: O(n)
function deleteDuplicate(list){
    let track = {};

    let temp = list.head;
    let prev = null;

    while(temp){
        if(track[temp.element]){
            prev.next = temp.next;
            list.size--;
        }else{
            track[temp.element] = true;
            prev = temp;
            
        }
        temp = temp.next;
    }
}

// creating an object for the 
// Linkedlist class 
let ll = new LinkedList(); 
  
// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty()); 
  
// adding element to the list 
ll.add(10); 
  
// prints 10 
ll.printList(); 
  
// returns 1 
console.log(ll.sizeofList()); 
  
// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
  
// returns 10 20 30 40 50 
ll.printList(); 
  
// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 
  
// prints 10 20 30 40 
ll.printList(); 
  
// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 
  
// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 
  
ll.printList(); 
  
// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 
  
// remove 3rd element from the list 
console.log(ll.removeFrom(3)); 
  
// prints 10 20 60 40 
ll.printList(); 

ll.reverseSingleLinkedList();


ll.printList();

ll.add(40); 
ll.printList();

deleteDuplicate(ll);

ll.printList();

