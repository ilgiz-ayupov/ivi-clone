import { capitalize } from '@/utils';

describe('capitalize', () => {
    it('should return empty string when param str is empty string', () => {
        const result = capitalize('');

        expect(result).toBe('');
    });

    it('should capitalize the first letter of the string', () => {
        const result = capitalize('hello world');

        expect(result).toBe('Hello world');
    });
});
