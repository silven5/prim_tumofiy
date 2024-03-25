import { printedProducts } from "./printedProducts";

export class newspaper extends printedProducts{
    amountOfPages: string = "";
    valueOfpage: string = "";
    circulation: string = "";

    constructor(
        _Title: string, 
        _amountOfPages: string,
        _valueOfpage: string,
        _circulation: string){

        super(_Title);

        if(
            _Title === '' ||
            _amountOfPages === '' || 
            _valueOfpage === '' || 
            _circulation === ''
            ){
            throw new Error('undefined values');
        }
        else{
            this.amountOfPages = _amountOfPages;
            this.valueOfpage = _valueOfpage;
            this.circulation = _circulation;
        }
        
    }

    circulationValue(){
        return String(((parseFloat(this.valueOfpage) * parseInt(this.amountOfPages)) * parseInt(this.circulation)))
    }

    getTitle() {
        return this.Title;
    }

    getAmountOfPages(){
        return this.amountOfPages;
    }

    getValueOfPage(){
        return this.valueOfpage;
    }

    getCirculation(){
        return this.circulation;
    }
}