import { TreeNode } from './internal/model';
import { isNil } from './internal/isNil';
import { Compare, defaultCompare, TCompareFunction } from './internal/compare';

export class BinarySearchTree {
    protected _root: TreeNode | null = null;
    protected compareFn: TCompareFunction<number> = defaultCompare;

    constructor() {
        const initialKey = 1;
        this._root = new TreeNode(initialKey);
    }

    add(key: number) {
        if (isNil(this._root)) this._root = new TreeNode(key);
        else this.addNode(this._root, key);
    }
    remove(key: number) {
        if (isNil(this._root)) return null;
        this._root = this.removeNode(this._root, key);
    }

    search(key: number) {
        if (!this._root) return false;
        return this.searchNode(this._root, key);
    }

    get max() {
        return BinarySearchTree.getMaxNode(this._root);
    }

    get min() {
        return BinarySearchTree.getMinNode(this._root);
    }

    private addNode(node: TreeNode, key: number) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (isNil(node.left)) node.left = new TreeNode(key);
            else this.addNode(node.left, key);
            return;
        }
        if (isNil(node.right)) {
            node.right = new TreeNode(key);
            return;
        }

        this.addNode(node.right, key);
    }

    private searchNode(node: TreeNode | null, key: number): boolean {
        if (isNil(node)) return false;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) return this.searchNode(node.left, key);
        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) return this.searchNode(node.right, key);
        return true;
    }

    private removeNode(node: TreeNode | null, key: number) {
        if (isNil(node)) return null;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (isNil(node.left) && isNil(node.right)) return null;
            if (isNil(node.left)) return node.right;
            if (isNil(node.right)) return node.left;

            const aux = BinarySearchTree.getMinNode(node.right);
            if (!aux) return null;
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);

            return node;
        }
    }
    private static getMinNode(node: TreeNode | null) {
        let current = node;
        while (!isNil(current) && !isNil(current.left)) {
            current = current.left;
        }

        return current;
    }

    private static getMaxNode(node: TreeNode | null) {
        let current = node;
        while (!isNil(current) && !isNil(current.left)) {
            current = current.right;
        }

        return current;
    }
}
