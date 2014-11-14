"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		//Kontrollerar att det inmatade datumet är inskrivet i formatet ÅÅÅÅ-MM-DD
		if (date.length != 10 || date.charAt(4) != "-" || date.charAt(7) != "-") {
			throw new Error("Datumet är inte i rätt format!");
		}
		
		//Variabler
		var bdDate = new Date(date); //Sätter födelsedagen till födelsedatumet
		var now = new Date(); //Skapar en variabel med dagens datum
		
		//Ändrar födelsedagens år till i år
		bdDate.setFullYear(now.getFullYear());
		
		//Kollar om användaren redan fyllt år (om dagarna till födelsedagen är ett negativt tal)
		if (bdDate.getTime() < now.getTime()) {
			bdDate.setFullYear(now.getFullYear() + 1);
		}
		
		//Ändrar födelsedagens timme till exakt då dagen börjar
		bdDate.setHours(0);
		
		//Räknar ut antalet dagar till födelsedagen
		//genom att räkna skillnaden i millisekunder mellan nu och födelsedagen
		//samt dividera skillnaden så den blir i dagar
		var daysToBd = Math.ceil((bdDate.getTime() - now.getTime())/1000/60/60/24);
		
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