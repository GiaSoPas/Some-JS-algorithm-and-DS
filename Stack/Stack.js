class Stack {

    constructor(array) {

        this.items = [];

        if (array) this.items = array;
    }

    //push items
    //Push: Adds an element to the stack
    push(element) {
        this.items.push(element);
    }

    //pop
    //Pop() : Removes an element from the stack, 
    //if the function is call on an empty stack it indicates “Underflow”
    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    //peek
    //returns the top most elements in the stack, but doesn’t delete it
    peek() {
        return this.items[this.items.length - 1];
    }

    //isEmpty
    // return true if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    //printstack
    printStack() {
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

//Time Complexity: O(n)
function stackAccessNthTopNode(stack, n) {

    let stack1 = stack.getBuffer();

    if (n < 0) throw 'error'

    let bufferStack = new Stack(stack1);

    while (n-- !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();

}

//Time Complexity: O(n)
function stackSearch(stack, element) {
    let stack1 = stack.getBuffer();
    let bufferStack = new Stack(stack1);

    while (!bufferStack.isEmpty()) {
        if (bufferStack.pop() == element) {
            return true;
        }
    }
    return false;
}

// Performs Postfix Evaluation on a given exp
function postFixEvaluation(exp) {
    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c)) {
            stack.push(c - '0');
        } else {
            let operator1 = stack.pop();
            let operator2 = stack.pop();
            if (operator1 == "Underflow" || operator2 == "Underflow") {
                return "Can't perform postfix evaluation";
            }
            switch (c) {
                case "+":
                    stack.push(operator2 + operator1);
                    break;
                case "-":
                    stack.push(operator2 - operator1);
                    break;
                case "*":
                    stack.push(operator2 * operator1);
                    break;
                case "/":
                    stack.push(operator2 / operator1);
                    break;
            }
        }
    }
    return stack.pop();
}

// DESIGN A PARENTHESIS VALIDATION CHECKER USING A STACK
// Time Complexity: O(n)
function  parenthesisValidation(validationString){
    let stack = new Stack();

    for( let i = 0; i < validationString.length; i++){
        let currentChar = validationString.charAt(i);

        if(currentChar == '('){
            stack.push(currentChar);
        }else{

            if(stack.isEmpty()){
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

let stack1 = new Stack([3, 2, 1]);

console.log(stackAccessNthTopNode(stack1, 1)); // 2
console.log(stackAccessNthTopNode(stack1, 0)); // 1

console.log(stackSearch(stack1, 3)); // true
console.log(stackSearch(stack1, 4)); // false


console.log(postFixEvaluation("235*+8-")); // returns 9 
console.log(postFixEvaluation("23*+")); // returns postfix evaluation can't be performed 

console.log(stack1.printStack());

console.log(parenthesisValidation("((()")); //false 
console.log(parenthesisValidation("((((")); //false
console.log(parenthesisValidation("()()")); //true