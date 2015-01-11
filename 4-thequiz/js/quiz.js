"use strict";

var qNr = 0;

var Quiz = {
    
    init: function() {
        Quiz.startQuiz();
    },

// Hämtar information om en fråga och returnerar detta som ett objekt
    startQuiz: function() {
        var question = {};
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                question = JSON.parse(xhr.responseText);
                console.log(question);
                
            // Publicerar frågan på webbsidan
                Quiz.publishQuestion(question);
            }
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        
        xhr.send(null);
    },
    
    getQuestion: function(nextURL) {
        var question = {};
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                question = JSON.parse(xhr.responseText);
                console.log(question);
                
            // Publicerar frågan på webbsidan
                Quiz.publishQuestion(question);
            }
        };
        
        xhr.open("GET", nextURL, true);
        
        xhr.send(null);
    },
    
// Publicerar frågan på webbsidan
    publishQuestion: function(question) {
        var content = document.getElementById("content");
        var header = document.createElement("h2");
        var p = document.createElement("p");
        var label = document.createElement("label");
        var input = document.createElement("input");
        var button = document.createElement("button");
        
    // Rensar contenten på eventuella tidigare frågor
        content.innerHTML = "";
        
    // Anger vilket nummer det är på frågan
        header.innerHTML = "Fråga " + (++qNr);
        content.appendChild(header);
        
    // Skriver ut frågan
        p.innerHTML = question.question;
        content.appendChild(p);
        
    // Labeln för svaret
        label.for = "answer";
        label.innerHTML = "Svar: ";
        content.appendChild(label);
        
    // Textarean för svaret
        input.type = "text";
        input.id = "answer";
        input.name = "answer";
        content.appendChild(input);
        
    // Knappen för att skicka svaret
        button.innerHTML = "OK";
        button.onclick = function() {
        // Skickar svaret från användaren till API:et
            Quiz.sendAnswer(question, input.value);
        };
        content.appendChild(button);
        
    },
    
// Skickar svaret till API:et
    sendAnswer: function(question, answer) {
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log(xhr.responseText);
                    var message = JSON.parse(xhr.responseText);
                    console.log(message);
                    
                // Publicerar nästa fråga på webbsidan
                // ...om det finns en till fråga
                    if (message.nextURL) {
                        Quiz.getQuestion(message.nextURL);
                    } else {
                        console.log("SLUT!");
                    }
                    
                } else {
                    console.log("fel svar");
                }
            }
        };
        
        xhr.open("POST", question.nextURL, true);
        
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        var ans = {
            "answer": answer
        };
        
        xhr.send(JSON.stringify(ans));
    }
    
};

window.onload = Quiz.init;