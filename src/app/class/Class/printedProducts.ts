export abstract class printedProducts{
    protected Title: string = "";

    constructor(_Title: string){
        if(_Title === '') throw new Error('undefined values');
        else this.Title = _Title;
    }
    abstract circulationValue (): string;
}