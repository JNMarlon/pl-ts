type TObject = Record<string, unknown>;

export const safelyGet = (obj: TObject, str: string) => {
    const keys = str.split('.');

    let current: any = obj;

    for (const key of keys) {
        if (!current) return undefined;

        current = current[key];
    }
    return current;
};
