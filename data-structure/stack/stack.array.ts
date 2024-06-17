export class Stack<I> {
    private _items: I[] = [];

    push(item: I) {
        this._items.push(item);
    }

    pop() {
        return this._items.pop();
    }

    get items() {
        return this._items;
    }

    display() {
        console.log(this.items);
    }
}
