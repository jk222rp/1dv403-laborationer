"use strict"

var MessageBoard = {
    
    messages: [],
    
    removeMessage: function(messageID) {
        if (confirm("Vill du ta bort meddelandet?")) {
            MessageBoard.messages.splice(messageID, 1);
            MessageBoard.renderMessages();
        }
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
        var date = document.createElement("a");
        var div = document.createElement("div");
        var remove = document.createElement("a");
        var text = document.createElement("p");
        var theMessages = document.getElementById("theMessages");
        var time = document.createElement("p");
        
        // Gets the text
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        
        // Gets the date button
        date.setAttribute("href", "#");
        date.setAttribute("title", "Visa tidsstämpel");
        date.innerHTML = "<img src='js/pics/time.png' alt='Visa tidsstämpel'>";
        date.onclick = function() {
            alert("Inlägget skapades den " + MessageBoard.messages[messageID].getDateText() + " klockan " + MessageBoard.messages[messageID].getTimeText());
        };
        div.appendChild(date);
        
        // Gets the delete button
        remove.setAttribute("href", "#");
        remove.setAttribute("title", "Ta bort meddelande");
        remove.innerHTML = "<img src='js/pics/removebutton.png' alt='Ta bort meddelande'>";
        remove.onclick = function() {
            MessageBoard.removeMessage(messageID);
        };
        div.appendChild(remove);
        
        // Gets the date
        time.innerHTML = MessageBoard.messages[messageID].getTimeText();
        div.appendChild(time);
        
        // Renders the message
        theMessages.appendChild(div);
    },
    
    init: function() {
        var button = document.getElementById("sendButton");
        var message = document.getElementById("aMessage");
        
        button.onclick = function(){
            MessageBoard.messages.push(new Message(message.value, new Date()));
            message.value = "";
            MessageBoard.renderMessages();
        };
        
        message.onkeypress = function(e) {
            if(!e) {
                var e = window.event;
            }
            
            if (e.keyCode == 13 && !e.shiftKey) {
                MessageBoard.messages.push(new Message(message.value, new Date()));
                message.value = "";
                MessageBoard.renderMessages();
                return false;
            }
        };
    }
    
};

window.onload = MessageBoard.init;