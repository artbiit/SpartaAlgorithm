class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push = (value) => {
        if(this.size === 0){
            this.head = new Node(value);
        }else{
            const tmp = this.head;
            this.head = new Node(value);
            this.head.next = tmp;
        }
        this.size++;
    }

    pop = () => {
        if(this.size === 0){
             throw new Error('Size is zero');
        }

        const value = this.head.value;
        this.head = this.head?.next;
        this.size--;
        return value;
    }
}


class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    enqueue(value){
        if(this.size === 0){
            this.head = new Node();
            this.head.value = value;
            this.tail = new Node();
            this.head.next =   this.tail;
        }else{
            const newNode = new Node();
            newNode.value = value;
            this.tail.next = newNode;
        }


        this.size++;
    }

    dequeue() {
        if(this.size === 0){
            throw new Error("size is zero");
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
}









function insertSortRecursive(arr, n = arr.length) {
    if (n <= 1) return;

    insertSortRecursive(arr, n - 1);

    let pivot = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > pivot) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = pivot;
}


let arr = [2, 5, 6, 1, 3, 9];
insertSortRecursive(arr);
console.log(arr);  // [1, 2, 3, 5, 6, 9] 출력
