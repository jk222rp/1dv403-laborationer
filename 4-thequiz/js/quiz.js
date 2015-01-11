"use strict";

var Quiz = {
    
    init: function() {
        Quiz.question();
    },

// Hämtar information om en fråga och returnerar detta som ett objekt
    question: function() {
        var question = {};
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                question = JSON.parse(xhr.responseText);
                console.log(question);
                
            // Publicerar frågan på webbsidan
                Quiz.publishQuestion(question);
                
            // Hämtar svaret från användaren
                Quiz.answer();
            }
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        
        xhr.send(null);
        
        //return question;
    },
    
// Publicerar frågan på webbsidan
    publishQuestion: function(question) {
        
    },
    
// Hämtar svaret från användaren
    answer: function() {
        
    },
    
// Skickar svaret till API:et
    sendAnswer: function() {
        
    }
    
};

window.onload = Quiz.init;