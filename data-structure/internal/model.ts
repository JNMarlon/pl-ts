export class ValuePair<K, V> {
    constructor(public key: K, public value: V) {}

    toString() {
        return `[#${this.key}:${this.value}]`;
    }
}

export class TreeNode {
    public key: number;
    public left: TreeNode | null = null;
    public right: TreeNode | null = null;

    constructor(key: number) {
        this.key = key;
    }

    toString() {
        return `${this.key}`;
    }
}
