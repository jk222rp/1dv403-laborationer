"use strict";

var Desktop = {
    
    init: function() {
        Desktop.ImageViewer();
    },
    
    ImageViewer: function() {
        var openImageViewer = document.getElementById("openImageViewer");
        
        openImageViewer.onclick = function() {
            Desktop.openWindow();
        };
    },
    
// Skapar ett fönster på skrivbordet
    openWindow: function() {
    //Skapar variabler
        var container = document.getElementById("container");
        var win = document.createElement("div");
        var winHead = document.createElement("div");
        var winHeadIcon = document.createElement("img");
        var winHeadText = document.createElement("p");
        var closeButton = document.createElement("a");
        var closeImg = document.createElement("img");
        var winContent = document.createElement("div");
        var winFoot = document.createElement("div");
        
    //Skapar en ikon och lägger in i fönstrets header
        winHeadIcon.src = "pics/Picture.png";
        winHeadIcon.setAttribute("id", "windowHeaderIcon");
        winHead.appendChild(winHeadIcon);
        
    //Skapar en text och lägger in i fönstrets header
        winHeadText.innerHTML = "Image Viewer";
        winHead.appendChild(winHeadText);
        
    //Skapar en kryssruta och lägger in i en länk
        closeImg.src = "script/pics/Close.png";
        closeImg.setAttribute("id", "closeImg");
        closeButton.appendChild(closeImg);
        
    //Skapar en länk och lägger in i fönstrets header
        closeButton.setAttribute("id", "closeButton");
        closeButton.setAttribute("href", "#");
        closeButton.setAttribute("title", "Stäng Image Viewer");
        closeButton.onclick = function() {
            container.removeChild(win);
        };
        winHead.appendChild(closeButton);
        
    //Skapar en header och lägger in i fönstret
        winHead.setAttribute("id", "windowHeader");
        win.appendChild(winHead);
        
    //Skapar en content och lägger in i fönstret
        winContent.setAttribute("id", "windowContent");
        win.appendChild(winContent);
        
    //Skapar en footer och lägger in i fönstret
        winFoot.setAttribute("id", "windowFooter");
        win.appendChild(winFoot);
        
    //Skapar ett fönster och lägger in i containern
        win.setAttribute("id", "window");
        container.appendChild(win);
    }
};

window.onload = Desktop.init;