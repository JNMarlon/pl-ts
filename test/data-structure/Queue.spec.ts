import { Queue } from '../../data-structure/Queue';

describe('Queue', () => {
    let q: Queue<number>;

    beforeEach(() => {
        q = new Queue<number>();
    });

    it('빈 거 테스트', () => {
        expect(q.size).toEqual(0);
        expect(q.isEmpty()).toEqual(true);
    });

    it('넣기', () => {
        q.enqueue(1);
        expect(q.size).toEqual(1);

        q.enqueue(2);
        expect(q.size).toEqual(2);
        expect(q.isEmpty()).toBe(false);
    });

    it('빼기', () => {
        q.enqueue(1);
        q.enqueue(2);

        expect(q.dequeue()).toEqual(1);
        expect(q.dequeue()).toEqual(2);
        expect(q.dequeue()).toEqual(undefined);
    });

    it('FIFO 테스트', () => {
        q.enqueue(1);
        expect(q.peek()).toEqual(1);

        q.enqueue(2);
        expect(q.peek()).toEqual(1);

        q.enqueue(3);
        q.dequeue();
        expect(q.peek()).toEqual(2);
    });
    it('size', () => {
        expect(q.size).toEqual(0);
        q.enqueue(1);
        q.enqueue(20);
        expect(q.size).toEqual(2);

        q.dequeue();
        expect(q.size).toEqual(1);
        q.enqueue(10);
        q.clear();

        expect(q.size).toEqual(0);
    });

    it('toString()', () => {
        const num = 5;

        for (let i = 0; i < num; i++) {
            q.enqueue(i);
        }

        q.dequeue();

        expect(q.toString()).toEqual('1,2,3,4');
    });
});
