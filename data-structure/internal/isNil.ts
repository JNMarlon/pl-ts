type Nullable<T> = T extends null | undefined ? T : never;

export const isNil = <T>(a: T): a is Nullable<T> => {
    if (a === undefined || a === null) {
        return true;
    }

    return false;
};
