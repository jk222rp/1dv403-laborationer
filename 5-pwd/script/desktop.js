"use strict";

var Desktop = {
    
    init: function() {
        Desktop.ImageViewer();
    },
    
    ImageViewer: function() {
        var openImageViewer = document.getElementById("openImageViewer");
        
    //Sätter onclick-event på ikonen för ImageViewer
        openImageViewer.onclick = function() {
        //Skapar ett fönster på skrivbordet
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
        Desktop.getImages();
    },
    
//Hämtar bilderna
    getImages: function() {
        var images = [];
        var xhr = new XMLHttpRequest();
        
    //Anropar funktionen för att skapa laddarikon + text
        Desktop.loading();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                images = JSON.parse(xhr.responseText);
                
            //Lägger till bilderna i fönstret
                Desktop.addImages(images);
            
            //Anropar funktionen för att ta bort laddarikon + text
                Desktop.stopLoading();
            }
        };
        
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        
        xhr.send(null);
    },
    
//Skapar laddarikon + text
    loading: function() {
        var loadImg = document.createElement("img");
        var loadText = document.createElement("p");
        var winFoot = document.getElementById("windowFooter");
        
    //Lägger till laddarikon till fönstrets footer
        loadImg.src = "script/pics/ajax-loader.gif";
        winFoot.appendChild(loadImg);
        
    //Lägger till "Laddar..."-text till fönstrets footer
        loadText.setAttribute("class", "loadText");
        loadText.innerHTML = "Laddar...";
        winFoot.appendChild(loadText);
    },
    
//Tar bort laddarikon + text och skriver ut Klar! som text
    stopLoading: function() {
        var readyText = document.createElement("p");
        var winFoot = document.getElementById("windowFooter");
        
    //Tar bort laddarikon + text
        winFoot.innerHTML = "";
        
    //Lägger till "Klar!"-text till fönstrets footer
        readyText.setAttribute("class", "readyText");
        readyText.innerHTML = "Klar!";
        winFoot.appendChild(readyText);
    },
    
//Lägger till bilderna
    addImages: function(images) {
        var size = [];
        var winContent = document.getElementById("windowContent");
        
    //Tar fram högsta höjd och bredd av tumnagelbilderna
        size = Desktop.getSize(images);
    
    //Lägger till bilderna i boxar i länkar för varje bild som finns
        for (var i = 0; i < images.length; i++) {
            var thumbBox = document.createElement("div");
            var thumbImg = document.createElement("img");
            var thumbLink = document.createElement("a");
            
        //Skapar en bild och lägger in i en box
            thumbImg.src = images[i].thumbURL;
            thumbImg.setAttribute("class", "images");
            thumbBox.appendChild(thumbImg);
        
        //Sätter bredd och höjd på tumnagelboxarna
        //till de högsta värdena bland de laddade bilderna
            thumbBox.style.width = size[0].toString() + "px";
            thumbBox.style.height = size[1].toString() + "px";
        
        //Skapar en box och lägger in i en länk
            thumbBox.setAttribute("class", "thumbBox");
            thumbLink.appendChild(thumbBox);
            
        //Skapar en länk och lägger in i fönstrets content
            thumbLink.setAttribute("href", "#");
            winContent.appendChild(thumbLink);
        }
    },
    
//Tar fram högsta höjd och bredd av tumnagelbilderna
    getSize: function(images) {
        var width = 0;
        var height = 0;
        var size = [];
        
    //Går igenom varje bild
        for (var i = 0; i < images.length; i++) {
        //Om bildens bredd är större än tidigare lagrat värde på bredd
        //ändras det lagrade värdet till bildens bredd
            if (images[i].thumbWidth > width) {
                width = images[i].thumbWidth;
            }
            
        //Om bildens höjd är större än tidigare lagrat värde på höjd
        //ändras det lagrade värdet till bildens höjd
            if (images[i].thumbHeight > height) {
                height = images[i].thumbHeight;
            }
        }
        
        size[0] = width;
        size[1] = height;
        
        return size;
    }
};

window.onload = Desktop.init;