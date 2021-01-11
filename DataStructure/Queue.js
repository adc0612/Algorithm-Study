// 큐 구현
// 큐는 FIFO(First In, First Out)로  먼저 삽입된 element가 가장 먼저 제거되는 방식을 취한다. 
// 맛집에 들어가려고 기다리는 대기줄이라고 생각하면 쉽다. 먼저 도착한 사람이 먼저 입장하는 개념이다.

// 큐는 array로 만들면 좋지 않다. Array의 경우 앞에서부터 element를 제거해야 하는데, 그 경우 index를 다시 재조정해야 하기 때문에 O(n)이 된다. 
// 따라서 Queue는 반드시 Linked List로 만든다.

// 1. array로 queue 구현
class ArrQueue {
    constructor() {
        this.arr = [];
    }

    enqueue(item) {
        this.arr.push(item);
    }

    dequeue() {
        return this.arr.shift();
    }

    peek() {
        return this.arr[0];
    }

    isEmpty() {
        return (this.arr.length === 0) ? true : false;
    }
}

const queue = new ArrQueue;
console.log(queue);
console.log(queue.peek());
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());

// 2. Linked List로 queue 구현

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // 제일 앞의 value를 반환
    peek() {
        return this.first;
    }

    // 큐에 삽입 (앞에부터 삽입)
    enqueue(item) {
        const newNode = new Node(item);
        // 만약 비어있는 큐면 first와 last를 새로운 value로 지정
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // 비어있는 않는 큐이면 맨뒤에 있는 요소에 next를 새 value로 지정하고
            // 새 value를 맨뒤에 요소로 지정
            this.last.next = newNode;
            this.last = newNode;
        }
        // 큐 길이 증가하고 return한다.
        this.length++;
        return this;
    }

    // 큐 value반환 및 삭제 (뒤에부터 반환)
    dequeue() {
        // 만약 비어있는 큐이면 null반환
        if (!this.first) {
            return null;
        }
        // first와 last가 같다면 안에 1개의 value가 들어있는 것이다.
        // 그러면 먼저 last에 null 값을 집어 넣고 그 뒤에서 first도 null하고 반환 할 것이다.
        if (this.first === this.last) {
            this.last = null;
        }
        // first를 삭제하고 반환 해야하므로 first값을 tempNode에 집어넣는다.
        const tempNode = this.first;
        // first.next를 first로 대체한다.
        this.first = this.first.next;
        // 길이를 줄여주고 tempNode를 return한다.
        this.length--;
        return tempNode;
    }

    isEmpty() {
        return (this.length === 0) ? true : false;
    }

}

const linkedListQueue = new LinkedListQueue;
console.log();
console.log(linkedListQueue);
console.log(linkedListQueue.peek());
console.log(linkedListQueue.enqueue("banana"));
console.log(linkedListQueue.enqueue("apple"));
console.log(linkedListQueue);
console.log(linkedListQueue.peek());
console.log(linkedListQueue.dequeue());
console.log(linkedListQueue.dequeue());