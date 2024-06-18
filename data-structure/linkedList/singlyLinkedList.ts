interface INode {
    value: unknown;
    next: INode | null;
}

class _Node implements INode {
    public value;
    public next: _Node | null;

    constructor(value: unknown) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    private head: INode | null;
    private tail: INode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    find<V>(value: V) {
        let currNode = this.head;
        while (currNode?.value !== value) {
            if (currNode?.next) {
                currNode = currNode?.next;
            }
        }
        return currNode;
    }

    append<V>(newValue: V) {
        const newNode = new _Node(newValue);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insert<V>(node: INode, newValue: V) {
        const newNode = new _Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove<V>(value: V) {
        let prevNode = this.head;
        while (prevNode?.next?.value !== value) {
            if (prevNode) prevNode = prevNode?.next;
        }

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    log() {
        let currNode = this.head;
        let displayStr = '[';
        while (currNode !== null) {
            displayStr += currNode.value;
            currNode = currNode.next;
        }

        displayStr += ']';
        console.log(displayStr);
    }
}
