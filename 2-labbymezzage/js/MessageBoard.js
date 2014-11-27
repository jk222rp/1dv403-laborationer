"use strict"

var MessageBoard = {
    
    messages: [],
    
    removeMessage: function(messageID) {
            MessageBoard.messages.splice(messageID, 1);
    },
    
    renderMessages: function() {
        var theMessages = document.getElementById("theMessages");
        
        // Remove all messages
        theMessages.innerHTML = "";
        
        // Renders all messages
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            MessageBoard.renderMessage(i);
        }
        
        // Adds message counter
        var numberOfMessages = document.createElement("p");
        numberOfMessages.innerHTML = "Antal meddelanden: " + (MessageBoard.messages.length);
        theMessages.appendChild(numberOfMessages);
    },
        
    renderMessage: function(messageID) {
        var date = document.createElement("p");
        var remove = document.createElement("a");
        var div = document.createElement("div");
        var text = document.createElement("p");
        var theMessages = document.getElementById("theMessages");
        
        // Gets the text
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        
        // Gets the delete button
        remove.setAttribute("href", "#");
        remove.setAttribute("title", "Remove message");
        remove.innerHTML = "<img src='js/pics/Removebutton.png' alt='Remove message'>";
        remove.onclick = function() {
            MessageBoard.removeMessage(messageID);
            MessageBoard.renderMessages();
        };
        div.appendChild(remove);
        
        // Gets the date
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