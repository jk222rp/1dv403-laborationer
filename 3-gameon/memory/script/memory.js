"use strict";

var Memory = {
    
    init: function() {
        var rows = 4;
        var cols = 4;
        
        Memory.randoms = RandomGenerator.getPictureArray(rows, cols);
        
        Memory.createGame(rows, cols);
    },
    
    //Array with the random numbers
    randoms: [],
    
    //Creates a table with the images in the game
    createGame: function(rows, cols) {
        
        var container = document.getElementById("container");
        var table = document.createElement("table");
        var count = 0;
        
        // creates and adds each row
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            
            // creates and adds each column
            for (var j = 0; j < cols; j++) {
                var td = document.createElement("td");
                td.id = "col" + count;
                
                // creates the image with the back side of the "card"
                var img = document.createElement("img");
                //img.src = "pics/" + Memory.randoms[count] + ".png";
                img.src = "pics/0.png";
                
                // creates a link around the image
                var a = document.createElement("a");
                a.setAttribute("href", "#");
                a.appendChild(img);
                a.onclick = openBrick(count, img);
                
                td.appendChild(a);
                
                tr.appendChild(td);
                
                ++count;
            }
            
            table.appendChild(tr);
        }
                
        function openBrick(count, img) {
            return function() {
                img.src = "pics/" + Memory.randoms[count] + ".png";
            };
        }
        
        container.appendChild(table);
    }
    
};

window.onload = Memory.init;