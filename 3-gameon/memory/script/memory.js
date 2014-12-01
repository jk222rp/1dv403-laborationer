"use strict";

var Memory = {
    
    randoms: [],
    
    init:function() {
        Memory.randoms = RandomGenerator.getPictureArray(4, 4);
        
    }
};

window.onload = Memory.init;