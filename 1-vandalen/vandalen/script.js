"use strict";

var makePerson = function(persArr){
    var ageArr = [];
    var nameArr = [];
    var result = {};
		
		
	/*if (typeof persArr !== "object") {
	    throw new Error(persArr + " verkar inte vara ett objekt.");
	}
	if (typeof persArr.age !== "number") {
	    throw new Error(persArr.age + " verkar inte vara av typen number.");
	}	
	if (typeof persArr.name !== "string") {
	    throw new Error(persArr.name + " verkar inte vara av typen string.");
	}*/

    /*persArr.forEach(function (person, index){
		ageArr[index] = person.age;
		nameArr[index] = person.name;
	});*/
	
	ageArr = persArr.map(function(person, index){
		if (typeof person.age === "number") {
			return person.age;
		} else {
			console.log("Det inmatade värdet kan inte tolkas som ett nummer, eller så är inget värde inmatat.");
		}
	});
	
	nameArr = persArr.map(function(person){
		if (typeof person.name === "string") {
			return person.name;
		} else {
			console.log("Det inmatade värdet kan inte tolkas som en sträng, eller så är inget värde inmatat.");
		}
	});
	
	//console.log(ageArr);
	
	ageArr.sort(function(a, b){return a-b});
	
	result.minAge = ageArr[0];
	result.maxAge = ageArr[ageArr.length - 1];
	result.averageAge = Math.round(ageArr.reduce(function(a,b) {return a + b;}) / ageArr.length);
	result.names = nameArr.sort(function(a,b) {return a.localeCompare(b);} ).join(", ");
    
    console.log(result);
    
    return result;
};

//var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

//var data = "hej"; // Testar om det är ett objekt

//var result = makePerson(data);

//console.log(result);