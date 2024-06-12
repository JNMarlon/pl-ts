interface INode {
    value: unknown;
    next: INode | null;
}

class _Node implements INode {
    public value;
    public next: _Node | null;

    constructor(value: any) {
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
}
