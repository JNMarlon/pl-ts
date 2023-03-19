// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Comparator } from '../internal/Comparator';

export class Sort {
    public callbacks: any;
    public comparator: Comparator;

    constructor(callbacks) {
        this.callbacks = Sort.initCallbacks(callbacks);
        this.comparator = new Comparator(this.callbacks.compareCallback);
    }

    static initCallbacks(_callbacks) {
        const callbacks = _callbacks || {};
        const stubCallback = () => {};

        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

        return callbacks;
    }

    sort() {
        throw new Error('sort method must be implemented');
    }
}
