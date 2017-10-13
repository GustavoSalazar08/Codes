countUnset(65535);
countUnset(12547);
countUnset(655353);

function countUnset(num) {
	var binNum = (num >>> 0).toString(2); //Convert decimal to binary
	
	var count = 0;
	var len = binNum.length;
	if(len < 16){ //if binNum length is less than 16, then count the remaining bits 
		while(len < 16){
			count++;
			len++;
		}
	}
	else if(len > 16){ //if binNum length is more than 16, then return Error.
		console.log("Error. Number must be 16 bits.");
		return "Error. Number must be 16 bits.";
	}
	
	for(i=0; i<binNum.length; i++){ //Count the unset bits in the String.
		if(binNum[i] == '0') count++;
	}
	
	console.log("Total: "+count);
    return count; //Return the amount.
}