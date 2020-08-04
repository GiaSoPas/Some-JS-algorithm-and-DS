class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0; 
    }

    isEmpty(){
        return this.size == 0;
    }

    //Push method helps us to add the new node at the end of the Linked list.
    //Time Complexity: O(1)
    push(data){

        let node = new Node(data);

        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
        
    }

    //It helps us to remove the last node from the list.
    //Time Complexity: O(1)
    pop(){

        if(!this.head) return null;

        let prevNode = this.tail.prev;
        let value = this.tail.data;

        if(prevNode){
            prevNode.next = null;
            this.tail = prevNode;
        }else{
            this.head = null;
            this.tail = null;
        }

        this.size--;
        return value;
    }

    //insertAtHead method helps us to insert the new node at the beginning of the list.
    //Time Complexity: O(1)
    insertAtHead(data){
        let node = new Node(data);

        if(this.head){
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }else{
            this.head = node;
            this.tail = node;
        }

        this.size++;
    }

    //The deleteAtHead method helps us to remove the first node from the linked list.
    //Time Complexity: O(1)
    deleteAtHead(){
        if(!this.head) return null;

        let node = this.head.next;
        let value = this.head.data;

        if(node){
            node.prev = null;
            this.head = node;
        }else{
            this.head = null;
            this.tail = null;
        }

        this.size--;
        return value;
    }

    //Time Complexity: O(n)
    find(data){
        let current = this.head;
        while(current.next){
            if(current.data == data){
                return true
            }
            current = current.next;
        }
        return false;
    }

    printList(){
        let current = this.head;
        let str = "";

        while(current){
            str += current.data + " ";
            current = current.next;

        }

        console.log(str);
    }
}

let list = new doublyLinkedList();

console.log(list.isEmpty()); 

list.insertAtHead(40);
list.push(30);

list.printList(); 


list.push(20);
list.insertAtHead(10);

list.printList(); 

console.log(list.find(10));
console.log(list.find(2));

list.deleteAtHead();
list.pop();

list.printList();