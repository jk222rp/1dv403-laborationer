"use strict"

var MessageBoard = {
    
    messages: [],
    
    renderMessages: function() {
        // Remove all messages
        document.getElementById("theMessages").innerHTML = "";
        
        // Renders all messages
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            MessageBoard.renderMessage(i);
        }
    },
        
    renderMessage: function(messageID) {
        var theMessages = document.getElementById("theMessages");
        var newMessage = document.createElement("p");
        newMessage.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        theMessages.appendChild(newMessage);
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