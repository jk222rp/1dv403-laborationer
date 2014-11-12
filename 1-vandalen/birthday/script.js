"use strict";

window.onload = function(){

	
	var birthday = function(date){
		


			// Din kod här.
		if (date.length != 10 || date.charAt(4) != "-" || date.charAt(7) != "-") {
			throw new Error("Datumet är inte i rätt format!");
		}
		
		var bdDate = new Date(date);
		
		var now = new Date();
		
		var currentYear = Math.floor(1970+(now.getTime()/1000/60/60/24/365));
		
		bdDate.setFullYear(currentYear);
		
		bdDate.setHours(0); //För att få tiden exakt då dagen börjar
		
		var daysToBd = Math.ceil((bdDate.getTime() - now.getTime())/1000/60/60/24);
		
		//Kollar om användaren redan fyllt år (om dagarna till födelsedagen är ett negativt tal)
		if (daysToBd < 0) {
			throw new Error("Du har redan fyllt år!");
		}
		
		return daysToBd;

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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};