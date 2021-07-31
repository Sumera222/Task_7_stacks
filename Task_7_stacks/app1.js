/*Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the stack.
push: a method through that you can add a value to the stack
peek: a method through which you can get the value on the top of stack
pop: a method through which you can remove the first element of the stack */

class Stack {
    //// Array is used to implement stack
    constructor() {
        this.items = [];
        this.size = 0;
    }
    // add element to top of stack
    push(item) {
        this.items.push(item);
        this.size++;
    }
    // return and remove top element in stack
    // return undefined if stack is empty
    pop() {
        //if (this.items.length == 0)
        // return "Underflow";
        return this.items.pop();
        this.size--;
    }

    // check top element in stack
    peek() {
        console.log(this.items[this.items.length - 1]);
    }
    printstack() {
        for (let i = 0; i < this.items.length; i++)
            console.log(this.items[i]);
    }
}


//creating object for stack class
let mystack = new Stack();

mystack.push("Qawali");
mystack.push("Ghazal");
mystack.push("Marsiya");
mystack.printstack();

mystack.pop();
mystack.printstack();

mystack.peek();
mystack.printstack();