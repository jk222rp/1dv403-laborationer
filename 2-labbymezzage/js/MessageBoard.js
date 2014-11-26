"use strict"

var MessageBoard = {
    
    messages: [],
    
    renderMessages: function() {
        var count = 0;
        var theMessages = document.getElementById("theMessages");
        
        // Remove all messages
        theMessages.innerHTML = "";
        
        // Renders all messages
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            MessageBoard.renderMessage(i);
            count = i;
        }
        
        // Adds message counter
        var numberOfMessages = document.createElement("p");
        numberOfMessages.innerHTML = "Antal meddelanden: " + (count + 1);
        theMessages.appendChild(numberOfMessages);
    },
        
    renderMessage: function(messageID) {
        var date = document.createElement("p");
        var div = document.createElement("div");
        var text = document.createElement("p");
        var theMessages = document.getElementById("theMessages");
        
        // Gets the text
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        
        // Get the date
        date.innerHTML = MessageBoard.messages[messageID].getDateText();
        div.appendChild(date);
        
        // Renders the message
        theMessages.appendChild(div);
    },
    
    init: function() {
        var button = document.getElementById("sendButton");
        var message = document.getElementById("aMessage");
        
        button.onclick = function(){
            MessageBoard.messages.push(new Message(message.value, new Date()));
            MessageBoard.renderMessages();
        };
    }
    
};

window.onload = MessageBoard.init;