// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

export class Comparator {
    compare: (a: any, b: any) => number;
    constructor(compareFunction: (a, b) => number) {
        this.compare = compareFunction || this.defaultCompareFunction;
    }

    static defaultCompareFunction(a: any, b: any) {
        if (a === b) return 0;
        return a < b ? -1 : 1;
    }

    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    reverse() {
        const compare = this.compare;

        this.compare = (a, b) => compare(b, a);
    }
}
