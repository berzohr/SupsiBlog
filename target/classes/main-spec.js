import { main } from './main';
describe('main isolated unit test suite', () => {
    it('fake test', () => {
        expect(true).toBe(true);
    });
    it('main should be a object', () => {
        expect(typeof main).toBe('object')
    });
    it('go should return 1', () => {
        expect(main.go()).toBe(1);
    });
})