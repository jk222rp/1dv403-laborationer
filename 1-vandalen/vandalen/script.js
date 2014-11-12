"use strict";

var makePerson = function(persArr){
    var ageArr = [];
    var nameArr = [];
    var result = {};
		
		
	/*if (typeof persArr !== "object" && typeof persArr !== "undefined") {
	    throw new Error(persArr + " verkar inte vara ett objekt.");
	}
	if (typeof persArr.age !== "number" && typeof persArr.age !== "undefined") {
	    throw new Error(persArr.age + " verkar inte vara av typen number.");
	}	
	if (typeof persArr.name !== "string" && typeof persArr.name !== "undefined") {
	    throw new Error(persArr.name + " verkar inte vara av typen string.");
	}*/

    persArr.forEach(function (person, index){
		ageArr[index] = person.age;
		nameArr[index] = person.name;
	});
	
	
	ageArr.sort(function(a, b){return a-b});
	
	result.minAge = ageArr[0];
	result.maxAge = ageArr[ageArr.length - 1];
	result.averageAge = Math.ceil((ageArr.reduce(function(a,b) {return a + b;} )) / ageArr.length);
	result.names = nameArr.sort(function(a,b) {return a.localeCompare(b);} ).join(", ");
    
    return result;
};

//var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

//var data = "hej"; // Testar om det är ett objekt

//var result = makePerson(data);

//console.log(result);