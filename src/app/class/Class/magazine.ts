import { printedProducts } from "./printedProducts";

export class magazine extends printedProducts {
    value: string = "";
    circulation: string = "";

    constructor(_Title: string, _value: string, _circulation: string) {
        super(_Title);

        if (_Title === '' || _value === '' || _circulation === '') {
            throw new Error('undefined values');
        } else {
            this.value = _value;
            this.circulation = _circulation;
        }
    }

    circulationValue() {
        return String(parseFloat(this.value) * parseInt(this.circulation))
    }

    getTitle() {
        return this.Title;
    }

    getValue() {
        return this.value;
    }

    getCirculation() {
        return this.circulation;
    }
}