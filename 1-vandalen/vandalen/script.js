"use strict";

var makePerson = function(persArr){
    var ageArr = [];
    var nameArr = [];
    var result = {};
	
	ageArr = persArr.map(function(person){
		if (typeof person.age === "number") {
			return person.age;
		} else {
			throw new Error("Det inmatade värdet kan inte tolkas som ett nummer, eller så är inget värde inmatat.");
		}
	});
	
	nameArr = persArr.map(function(person){
		if (typeof person.name === "string") {
			return person.name;
		} else {
			throw new Error("Det inmatade värdet kan inte tolkas som en sträng, eller så är inget värde inmatat.");
		}
	});
	
	ageArr.sort(function(a, b){return a-b});
	
	result.minAge = ageArr[0];
	result.maxAge = ageArr[ageArr.length - 1];
	result.averageAge = Math.round(ageArr.reduce(function(a,b) {return a + b;}) / ageArr.length);
	
	result.names = nameArr.sort(function(a,b) {return a.localeCompare(b);} ).join(", ");
    
    return result;
};