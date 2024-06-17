interface INode {
    value: unknown;
    next: INode | null;
}

class _Node implements INode {
    public value: unknown;
    public next: INode | null;

    constructor(value: unknown) {
        this.value = value;
        this.next = null;
    }
}

export class Stack<V> {
    private _top: INode | null;
    private _size: number;

    constructor() {
        this._top = null;
        this._size = 0;
    }

    push(value: V) {
        // Add a new node to the top of the stack
        const node = new _Node(value);
        node.next = this._top;
        this._top = node;
        this._size += 1;
    }

    pop() {
        // Remove the top node from the stack
        const value = this._top?.value;
        const next = this._top?.next;

        if (!value || !next) throw new Error('Stack is empty');

        this._top = next;
        this._size -= 1;

        return value;
    }

    get top() {
        return this._top;
    }

    get size() {
        return this._size;
    }
}
