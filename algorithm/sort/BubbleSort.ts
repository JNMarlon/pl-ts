// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Sort } from './Sort';

export class BubbleSort extends Sort {
    sort(originalArr) {
        let swapped = false;

        const arr = [...originalArr];

        for (let i = 1; i < arr.length; i += 1) {
            swapped = false;

            this.callbacks.visitingCallback(arr[i]);

            for (let j = 0; j < arr.length - i; j += 1) {
                this.callbacks.visitingCallback(arr[j]);

                if (this.comparator.lessThan(arr[j + 1], arr[j])) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }

                swapped = true;
            }
            if (!swapped) return arr;
        }

        return arr;
    }
}
