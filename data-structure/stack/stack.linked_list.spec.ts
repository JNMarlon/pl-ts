import { Stack } from './stack.linked_list';

describe('Stack Linked List', () => {
    it('push', () => {
        const stack = new Stack<number>();

        stack.push(1);
        stack.push(2);

        expect(stack.size).toBe(2);
        expect(stack.top?.value).toBe(2);

        stack.push(3);

        expect(stack.size).toBe(3);
        expect(stack.top?.value).toBe(3);
    });
    it('pop', () => {
        const stack = new Stack<number>();

        stack.push(1);
        stack.push(2);

        stack.pop();

        expect(stack.size).toBe(1);
        expect(stack.top?.value).toBe(1);
    });
});
