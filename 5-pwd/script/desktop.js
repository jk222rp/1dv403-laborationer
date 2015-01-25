"use strict";

var Desktop = {
    
    init: function() {
        Desktop.ImageViewer();
    },
    
    ImageViewer: function() {
        var openImageViewer = document.getElementById("openImageViewer");
        
        openImageViewer.onclick = function() {
            Desktop.openWindow();
            return false;
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
            return false;
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
        
    //Hämtar bilderna
        Desktop.getPictures();
    },
    
//Hämtar bilderna
    getPictures: function() {
        var pictures = [];
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                pictures = JSON.parse(xhr.responseText);
                
                Desktop.addPictures(pictures);
            }
        };
        
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        xhr.send(null);
    },
    
//Lägger till bilderna
    addPictures: function(pictures) {
        var size = [];
        var winContent = document.getElementById("windowContent");
        
    //Tar fram högsta höjd och bredd av tumnagelbilderna
        size = Desktop.getSize(pictures);
    
        for (var i = 0; i < pictures.length; i++) {
            var thumbBox = document.createElement("div");
            var thumbImg = document.createElement("img");
            var thumbLink = document.createElement("a");
            
            thumbImg.src = pictures[i].thumbURL;
            thumbImg.setAttribute("class", "images");
            thumbBox.appendChild(thumbImg);
        
        //Sätter bredd och höjd på tumnagelboxarna till de högsta värdena bland de laddade bilderna
            thumbBox.style.width = size[0].toString() + "px";
            thumbBox.style.height = size[1].toString() + "px";
            
            thumbBox.setAttribute("class", "thumbBox");
            thumbLink.appendChild(thumbBox);
            
            thumbLink.setAttribute("href", "#");
            winContent.appendChild(thumbLink);
        }
    },
    
//Tar fram högsta höjd och bredd av tumnagelbilderna
    getSize: function(pictures) {
        var width = 0;
        var height = 0;
        var size = [];
        
    //Går igenom varje bild
        for (var i = 0; i < pictures.length; i++) {
        //Om bildens bredd är större än tidigare lagrat värde på bredd
        //ändras det lagrade värdet till bildens bredd
            if (pictures[i].thumbWidth > width) {
                width = pictures[i].thumbWidth;
            }
            
        //Om bildens höjd är större än tidigare lagrat värde på höjd
        //ändras det lagrade värdet till bildens höjd
            if (pictures[i].thumbHeight > height) {
                height = pictures[i].thumbHeight;
            }
        }
        
        size[0] = width;
        size[1] = height;
        
        return size;
    }
};

window.onload = Desktop.init;