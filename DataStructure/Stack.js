// stack 구현
// 스택은 LIFO(Last In, First Out)로 마지막으로 삽입된 element가 가장 먼저 제거되는 방식을 취한다. 
// 따라서 스택은 브라우저 히스토리(이전 페이지, 다음 페이지) 또는 ctrl+z로 이전 작업을 취소하는 등의 동작에 쓰이는 자료구조이다.
// 1. array로 stack 구현
class ArrStack {
    constructor() {
        this.arr = [];
    }

    push(item) {
        this.arr.push(item);
    }

    pop() {
        return this.arr.pop();
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    isEmpty() {
        return (this.arr.length === 0) ? true : false;
    }
}

const stack = new ArrStack();
stack.push(1);
stack.peek(); //1
stack.push(5);
stack.pop(); //5

// 2. Linked List로 stack 구현

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(item) {
        const newNode = new Node(item);

        // length가 0이면 비어있는 stack에 새로 넣는 경우다.
        // top은 newNode로 입력
        if (this.length === 0) {
            this.top = newNode;
        } else {
            // 만약 length가 0이 아니면 stack에 아이템들이 있는 경우다.
            // prevTop에 제일 위에 있는 아이템을 넣어주고
            // top은 newNode로 바꿔주고, top.next를 prevTop을 해주면 push가 성공적으로 된다.
            const prevTop = this.top;
            this.top = newNode;
            this.top.next = prevTop;
        }
        // 삽입했으니 길이를 늘려준다.
        this.length++;
        return this;
    }

    pop() {
        // stack이 비어있는데 pop하면 null을 출력한다. 
        if (this.length === 0) return null;
        // stack에 아이템이 하나라면 current에 있던 아이템을 담고
        // top을 null로 length는 0으로 초기화를 한다.
        if (this.length === 1) {
            const current = this.top;
            this.top = null;
            this.length = 0;
            return current;
        }
        // stack에 아이템이 여러개면 this.top을 this.top.next를 만들어 아이템들을 하나씩 앞으로 떙긴다.
        this.top = this.top.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return (this.length === 0) ? true : false;
    }
}

const linkedListStack = new LinkedListStack();
console.log(linkedListStack.isEmpty());
console.log(linkedListStack.peek());
console.log(linkedListStack);
console.log(linkedListStack.peek());
// linkedListStack.peek();
linkedListStack.push(1);
console.log(linkedListStack.isEmpty());
console.log(linkedListStack.peek());
// linkedListStack.peek();
linkedListStack.push(5);
console.log(linkedListStack.peek());
console.log(linkedListStack.pop());
console.log(linkedListStack.pop());
console.log(linkedListStack);

linkedListStack.push(0);
console.log(linkedListStack);
linkedListStack.push(4);
linkedListStack.push(4);
console.log(linkedListStack);

// linkedListStack.pop();