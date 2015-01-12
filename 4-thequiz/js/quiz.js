"use strict";

var Quiz = {

    qNr : 0,
    results : [],
    
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
        header.innerHTML = "Fråga " + (++Quiz.qNr);
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
                    var message = JSON.parse(xhr.responseText);
                    
                // Publicerar nästa fråga på webbsidan
                // ...om det finns en till fråga
                    if (message.nextURL) {
                        Quiz.rightAnswer(message);
                    } else {
                    // Lägger till 0 fel, om inget fel gjorts, på sista frågan
                        if (Quiz.results[Quiz.qNr] === undefined) {
                            Quiz.results[Quiz.qNr] = 0;
                        }
                        Quiz.endOfQuiz();
                    }
                    
                } else if(xhr.status === 400) {
                    Quiz.wrongAnswer();
                }
            }
        };
        
        xhr.open("POST", question.nextURL, true);
        
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        var ans = {
            "answer": answer
        };
        
        xhr.send(JSON.stringify(ans));
    },
    
    rightAnswer: function(message) {
        Quiz.getQuestion(message.nextURL);
        if (Quiz.results[Quiz.qNr] === undefined) {
            Quiz.results[Quiz.qNr] = 0;
        }
    },
    
    wrongAnswer: function() {
        var content = document.getElementById("content");
        var p = document.createElement("p");
        
        p.setAttribute("class", "wrongAnswer");
        p.innerHTML = "Fel svar, försök igen.";
        content.appendChild(p);
        
        Quiz.result();
    },
    
// Sparar resultatet för varje fråga
    result: function() {
    // Sätter antal felsvar på den aktuella frågan till 1...
    // ...om det inte tidigare registrerats ett felsvar på den aktuella frågan
        if (Quiz.results[Quiz.qNr] === undefined) {
            Quiz.results[Quiz.qNr] = 1;
        } else {
            ++Quiz.results[Quiz.qNr];
        }
    },
    
// Skriver ut resultatet och att quizen är slut
    endOfQuiz: function() {
        var content = document.getElementById("content");
        var header = document.createElement("h2");
        var header2 = document.createElement("h3");
        
    // Rensar contenten på eventuella tidigare frågor
        content.innerHTML = "";
        
    // Skriver att quizen är slut
        header.innerHTML = "Quizen är slut!";
        content.appendChild(header);
        
    // Skriver ut resultatet
        header2.innerHTML = "Resultat";
        content.appendChild(header2);
        
        for (var i = 1; i < Quiz.results.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "result");
            p.innerHTML = "Fråga " + i + ": " + Quiz.results[i] + " fel.";
            content.appendChild(p);
        }
    }
    
};

window.onload = Quiz.init;