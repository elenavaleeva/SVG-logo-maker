const SVG = require('./svg');

describe('svg', () => {

    describe('Error1', () => {
        it('Return error: more than 3 characters', () => {
            expect(() => {
                const svg = new SVG();
                svg.setText("four", "blue");
            }).toThrow("Text must not exceed 3 characters");
        });
    })
    describe('Error2', () => {
        it('Return error: text is empty', () => {
            expect(() => {
                const svg = new SVG();
                svg.setText("", "blue");
            }).toThrow("text is empty");
        });
    })
    describe('Error3', () => {
        it('Return error: text is not string', () => {
            expect(() => {
                const svg = new SVG();
                svg.setText(5, "blue");
            }).toThrow("text is not string");
        });
    })
});
