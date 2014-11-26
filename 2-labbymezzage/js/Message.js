"use strict"

function Message(message, date){
    
    this.getMessage = function() {
        return message;
    };
    
    this.setMessage = function(_message) {
        message = _message;
    };
    
    this.getDate = function() {
        return date;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
}

Message.prototype.getHTMLText = function() {
    return this.getMessage().replace("\n", "<br />");
};

Message.prototype.toString = function() {
    return this.getMessage() + " (" + this.getDate() + ")";
};