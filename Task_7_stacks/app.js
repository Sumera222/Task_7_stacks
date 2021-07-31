/*Implement Stack using an array.
 Initialize it with an array which will be used to store values and a size property 
 that will be used to track the size of stack. */

 class Stack {
    constructor() {
        this.items = [];
        this.size = 6;
    }
    printStack() {

        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
    size() {
        return this.size;
    }
}

let myStack = new Stack();