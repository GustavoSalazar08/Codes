console.log(ageOfUser(1990));
console.log(ageOfUser(0));
console.log(ageOfUser(-1990));
console.log(ageOfUser(2045));
console.log(ageOfUser("a"));

function ageOfUser(year) {
	try{
		var d = new Date();
		var currentYear = d.getFullYear();
		
		if(isNaN(year)) throw "not a number."; //Exception 1. Year is not number.
		else if(year < 0) throw "negative."; //Exception 2. Year is negative.
		else if(year > currentYear) throw "more than current."; //Exception 3. Year is more than current.
		else return (currentYear - year); //Subtract the year to the current year.
	}
	catch(err){
		return "Year is " + err; //Return error
	}
}