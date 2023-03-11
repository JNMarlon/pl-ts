export interface Storage {
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
}

class LocalStorage implements Storage {
    get(key: string) {
        try {
            return localStorage.getItem(key) || '';
        } catch (e) {
            return '';
        }
    }

    set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
