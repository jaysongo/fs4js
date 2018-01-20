interface IError {
    message: string;
}

let createError = (message: string) : IError =>
    new Error(message);

class Error implements IError {

    private getMessage: () => string = 
        () => { throw { message: "Message is not initialized." }};

    get message() : string {
        return this.getMessage();
    }

    constructor(message: string) {
        this.getMessage = () => message;
    }
}

export { IError, createError };