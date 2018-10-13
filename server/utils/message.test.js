const expect = require('expect');

const {
    generateMessage
} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'hamid';
        const text = 'hello!'
        const res = generateMessage(from, text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(typeof (res.createdAt)).toBe('number');
    });
});