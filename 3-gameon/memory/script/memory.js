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
        
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            
            for (var j = 0; j < cols; j++) {
                var td = document.createElement("td");
                td.id = "col" + count;
                
                var img = document.createElement("img");
                img.src = "pics/" + Memory.randoms[count] + ".png";
                //img.src = "pics/0.png";
                td.appendChild(img);
                
                tr.appendChild(td);
                ++count;
            }
            
            table.appendChild(tr);
        }
        
        container.appendChild(table);
        
        console.log(col1.innerHTML);
        console.log(col2.innerHTML);
    }
    
};

window.onload = Memory.init;