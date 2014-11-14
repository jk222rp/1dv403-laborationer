"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		
		// Felhantering
		if (str === "") {
			throw new Error("Ingen text är inmatad");
		}
		if (str !== str.toString()) {
			throw new Error("Något gick fel! Inmatningen tolkas inte som en sträng.");
		}
		
		// Skapar en sträng som kan byggas på
		var newStr = "";
		
		// En array med varje tecken från den inskickade strängen
		var strArr = str.split("");
		
		// Bygger på strängen newStr med ändringarna
		strArr.forEach(function (char){
			newStr += (char == "a" || char == "A") ?
				"#"
			: (char == char.toLowerCase()) ?
				char.toUpperCase()
			: (char == char.toUpperCase()) ?
				char.toLowerCase()
			: 
				char
			;
		});
		
		return newStr;



	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};