import { createError } from './../helpers/error_helper';

export abstract class Option {
    abstract hasValue: boolean;
}

export class None extends Option {
    get hasValue() : boolean { return false; }
}

export class Some<T> extends Option {

    get hasValue() : boolean { return true; }

    private getValue: () => T = 
        () => { throw createError("getValue is not initialized"); };
    
    get value() : T  { return this.getValue(); }

    constructor(value: T) {
        super();
        this.getValue = () => value
    }
}