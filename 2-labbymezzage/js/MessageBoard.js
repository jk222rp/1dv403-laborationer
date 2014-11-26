"use strict"

var MessageBoard = {
    
    messages:[],
    
    init:function() {
        
        var button = document.getElementById("sendButton");
        var message = document.getElementById("aMessage");
        
        button.onclick = function(){
            MessageBoard.messages.push(new Message(message.value, new Date()));
        };
        
    }
};

window.onload = MessageBoard.init;