const { application } = require("express");

class AppError{
    message;
    statusCode;

    constructor(message , statusCode = 201){
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;