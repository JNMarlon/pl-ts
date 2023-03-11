import { Storage } from './storage';

export class TypedStorage {
    private storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    private serialize = <T>(value: T) => {
        return JSON.stringify(value);
    };

    private deserialize = (value: string) => {
        try {
            return JSON.parse(value);
        } catch (e) {
            return '';
        }
    };

    get(key: string) {
        return this.deserialize(this.storage.get(key) || '');
    }

    set<T>(key: string, value: T) {
        return this.storage.set(key, this.serialize(value));
    }
}
