import { TreeNode } from './internal/model';
import { isNil } from './internal/isNil';
import { Compare, defaultCompare, TCompareFunction } from './internal/compare';
//이진 탐색 트리에는 크게 세 가지 연산이 필요함
// 1. 탐색 (search)
// 2. 삽입 (add)
// 3. 삭제 (remove) => 제일 뭣같음
export class BinarySearchTree {
    protected _root: TreeNode;
    protected compareFn: TCompareFunction<number> = defaultCompare;

    constructor() {
        const initialKey = 1;
        this._root = new TreeNode(initialKey);
    }

    add(key: number) {
        if (isNil(this._root)) this._root = new TreeNode(key);
        else this.addNode(key);
    }
    remove(key: number) {
        if (isNil(this._root)) return null;
        else this._root = this.removeNode(this._root, key);
    }

    search(key: number) {
        if (!this._root) return false;
        else return this.searchNode(this._root, key);
    }

    get max() {
        return BinarySearchTree.getMaxNode(this._root);
    }

    get min() {
        return BinarySearchTree.getMinNode(this._root);
    }

    private addNode(key: number) {
        let node = this._root;

        while (!isNil(node)) {
            if (this.compareFn(key, node.key) === Compare.lessThan) {
                if (isNil(node.left)) {
                    node.left = new TreeNode(key);
                    return node.left;
                } else node = node.left; // continue
            } else if (this.compareFn(key, node.key) === Compare.biggerThan) {
                if (isNil(node.right)) {
                    node.right = new TreeNode(key);
                    return node.right;
                } else node = node.right; // continue
            } else if (this.compareFn(key, node.key) === Compare.equals) {
                throw new Error('Every key in Tree should be unique. Key you try to assigned is previously assigned before. Try other key');
            }
        }
    }

    private searchNode(key: number) {
        let node = this._root;

        while (!isNil(node)) {
            if (this.compareFn(key, node.key) === Compare.lessThan) {
                if (!node.left) return null;
                node = node.left;
            } else if (this.compareFn(key, node.key) === Compare.biggerThan) {
                if (!node.right) return null;
                node = node.right;
            } else if (this.compareFn(key, node.key) === Compare.equals) {
                return node; // target
            }
        }

        return null;
    }

    private removeNode(node: TreeNode | null, key: number) {
        if (isNil(node)) return null;
        if (this.compareFn(key, node.key) === Compare.lessThan) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        if (this.compareFn(key, node.key) === Compare.biggerThan) {
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
