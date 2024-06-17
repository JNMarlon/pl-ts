export class Stack<I> {
    private _items: I[] = [];
    private _size = 0;
    private _top: I | null = null;

    push(item: I) {
        this._items.push(item);
    }

    pop() {
        return this._items.pop();
    }

    get items() {
        return this._items;
    }

    get size() {
        return this._items.length;
    }
    get top() {
        return this._items[this._items.length - 1];
    }

    display() {
        console.log(this.items);
    }
}
