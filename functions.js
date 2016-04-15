// Function Practice 
// To stay on my toes 


/* The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in. */


function sleepIn(weekDay, vacation){
	if(!weekDay || vacation){
		return true
	} else {
		return false
	}
}


// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

function parrot(hour){
	if(hour < 7 || hour > 20){
		return true
	} else {
		return false
	}

}


//Given two temperatures, return true if one is less than 0 and the other is greater than 100.

function temp(temp1, temp2){
	if((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)){
		return true
	} else {
		return false
	}
}


// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

function noTriples(){
	
}




/*The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true  */

// Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".