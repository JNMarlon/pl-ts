export type TCompareFunction<T> = (a: T, b: T) => number;
export const enum Compare {
    lessThan = -1,
    biggerThan = 1,
    equals = 0,
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.equals;
    }
    return a < b ? Compare.lessThan : Compare.biggerThan;
}
