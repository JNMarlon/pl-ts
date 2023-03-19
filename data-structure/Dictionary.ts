import { defaultToString } from './internal/util';
import { ValuePair } from './internal/model';

export class Dictionary<K, V> {
    private table: { [key: string]: ValuePair<K, V> };
    private toStr: (key: K) => string;

    constructor() {
        this.toStr = defaultToString;
        this.table = {};
    }

    set(key: K, value: V) {
        if (!!key && !!value) {
            const tableKey = this.toStr(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }

        return false;
    }

    get(key: K): V {
        return this.table[this.toStr(key)]?.value;
    }

    hasKey(key: K): boolean {
        return !!this.table[this.toStr(key)];
    }

    remove(key: K) {
        if (this.hasKey(key)) {
            delete this.table[this.toStr(key)];

            return true;
        }

        return false;
    }

    values(): V[] {
        return this.keyValues().map((vp) => vp.value);
    }
    keys(): K[] {
        return this.keyValues().map((vp) => vp.key);
    }
    forEach(f: (key: K, value: V) => any) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = f(valuePairs[i].key, valuePairs[i].value);
            if (!result) break;
        }
    }

    keyValues(): ValuePair<K, V>[] {
        return Object.values(this.table);
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.table).length;
    }
    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) return '';
        const valuePairs = this.keyValues();
        let objStr = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objStr = `${objStr},${valuePairs[i].toString()}`;
        }

        return objStr;
    }
}
