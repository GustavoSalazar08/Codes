console.log(printNumbers());

function printNumbers() {
	var numbers = {};
	for(i=1; i<=100; i++){
		if(i%3 == 0 && i%5 == 0) numbers[i-1] = "FizzBuzz"; //compare if number is multiplier of 3 and 5 if it is met.
		else if(i%3 == 0) numbers[i-1] = "Fizz"; //compare if number is multiplier of 3 if it is met.
		else if(i%5 == 0) numbers[i-1] = "Buzz"; //compare if number is multiplier of 5 and assign Buzz if it is met.
		else numbers[i-1] = i; //if number is not multiplier, assign number
	}
	
    return numbers; //Return the numbers.
}