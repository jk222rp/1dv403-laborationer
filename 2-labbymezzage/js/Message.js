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

Message.prototype.getTimeText = function() {
    return this.getDate().toLocaleTimeString();
};

Message.prototype.getDateText = function() {
    var dayNr = this.getDate().getDate();
    var monthNr = this.getDate().getMonth();
    var year = this.getDate().getFullYear();
    
    // Sets names to months
    var months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
    
    var month = months[monthNr];
    
    var fullDate = dayNr + " " + month + " " + year;
    
    return fullDate;
};

Message.prototype.getHTMLText = function() {
    return this.getMessage().replace(/\n/g, "<br />");
};

Message.prototype.toString = function() {
    return this.getMessage() + " (" + this.getDate() + ")";
};