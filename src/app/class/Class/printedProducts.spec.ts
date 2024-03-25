import { printedProducts } from './printedProducts';

class MockPrintedProduct extends printedProducts {
    constructor(title: string) {
        super(title);
    }

    circulationValue(): string {
        return '1000';
    }
}

describe('PrintedProducts', () => {
    let product: MockPrintedProduct;

    beforeEach(() => {
        product = new MockPrintedProduct('Title');
    });
    
    it('should throw an error when creating an instance with an empty title', () => {
        expect(() => new MockPrintedProduct('')).toThrowError('undefined values');
    });

    it('should return the circulation value', () => {
        expect(product.circulationValue()).toBe('1000');
    });
});