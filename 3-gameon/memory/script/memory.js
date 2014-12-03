"use strict";

var Memory = {
    
    init: function() {
        var rows = 3;
        var cols = 4;
        
        Memory.randoms = RandomGenerator.getPictureArray(rows, cols);
        
        Memory.createGame(rows, cols);
        
        Memory.playGame(rows, cols);
    },
    
//Array with the random numbers
    randoms: [],
    
//Creates a table with the images in the game
    createGame: function(rows, cols) {
        
        var cardNr = 0;
        var content = document.getElementById("content");
        var table = document.createElement("table");
        
    // creates and adds each row
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            
        // creates and adds each column
            for (var j = 0; j < cols; j++) {
                var td = document.createElement("td");
                
            // creates the image with the back side of the card
                var img = document.createElement("img");
                img.setAttribute("id", "card" + cardNr);
                img.src = "pics/0.png";
                
            // creates a link around the image
                var a = document.createElement("a");
                a.setAttribute("href", "#");
                a.appendChild(img);
                
                td.appendChild(a);
                
                tr.appendChild(td);
                
                ++cardNr;
            }
            
            table.appendChild(tr);
        }
        
        content.appendChild(table);
    },
    
//Makes the game playable and returns the number of turns it took to complete the game
    playGame: function(rows, cols) {
        var aTags = document.getElementsByTagName("a");
        var cardNr = 0;
        var cards = [];
        var countTurnedCards = 0;
        var gameEnded = false;
        var nrOfTurnedPairs = 0;
        var nrOfTurns = 0;
    
    // sets onclick-event to the a-tags around the images
        for (var i = 0; i < aTags.length; i++) {
            var img = aTags[i].getElementsByTagName("img")[0];
            aTags[i].onclick = turnCard(cardNr, img);
            
            ++cardNr;
        }
        
    // turns a card, only if 2 cards aren't already turned
        function turnCard(cardNr, img) {
            return function() {
            // checks that 2 cards are not turned and that the card aren't already turned
                if (countTurnedCards < 1 && img.src[img.src.length - 5] === "0") {
                    img.src = "pics/" + Memory.randoms[cardNr] + ".png";
                    cards[0] = document.getElementById("card" + cardNr);
                    ++countTurnedCards;
                } else if (countTurnedCards < 2 && img.src[img.src.length - 5] === "0") {
                    img.src = "pics/" + Memory.randoms[cardNr] + ".png";
                    cards[1] = document.getElementById("card" + cardNr);
                    ++countTurnedCards;
                }
                
            // checks if 2 cards are turned and in that case turn them back after 1 second
                if (countTurnedCards == 2 && cards[0].src !== cards[1].src) {
                    setTimeout(function() {
                    // turn the cards back
                        cards[0].src = "pics/0.png";
                        cards[1].src = "pics/0.png";
                        
                    // the turned cards are now 0
                        countTurnedCards = 0;
                    }, 1000);
                    
                    
                // increases the number of turns
                    ++nrOfTurns;
                } else if (countTurnedCards == 2 && cards[0].src === cards[1].src) {
                    ++nrOfTurns;
                    ++nrOfTurnedPairs;
                        
                // the unmatching turned cards are now 0
                    countTurnedCards = 0;
                }
                
            // checks if all cards are turned
                if (!gameEnded && nrOfTurnedPairs === (rows * cols)/2) {
                    endOfGame();
                    gameEnded = true;
                }
                
            // the page won't reload
                return false;
            };
        }
        
        function endOfGame() {
            var container = document.getElementById("container");
            var p = document.createElement("p");
            p.innerHTML = "Grattis du klarade spelet på " + nrOfTurns + " försök!";
            container.appendChild(p);
        }
    }
};

window.onload = Memory.init;