import { safelyGet } from './safelyGet';

describe('safelyGet', () => {
    it('케이스에 따라 올바르게 undefined 값 반환하기', () => {
        /* repository가 undefined인 경우 */
        const object1 = {
            repository: undefined,
        };

        /* repository의 readme가 undefined인 경우 */
        const object2 = {
            repository: {
                readme: undefined,
            },
        };

        /** repository.readme 모두가 존재하는 경우 */
        const object3 = {
            repository: {
                readme: {
                    extension: 'md',
                    content: '금융을 쉽고 간편하게',
                },
            },
        };
        expect(safelyGet(object1, 'repository.readme.extension')).toBe(undefined);

        expect(safelyGet(object1, 'repository.readme')).toBe(undefined);

        expect(safelyGet(object1, 'repository')).toBe(undefined);

        expect(safelyGet(object2, 'repository.readme.extension')).toBe(undefined);

        expect(safelyGet(object2, 'repository.readme')).toBe(undefined);

        expect(safelyGet(object2, 'repository')).toEqual({ readme: undefined });

        expect(safelyGet(object3, 'repository.readme.extension')).toBe('md');

        expect(safelyGet(object3, 'repository.readme')).toEqual({ content: '금융을 쉽고 간편하게', extension: 'md' });
    });
});
