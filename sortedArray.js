var arr1 = [4,5,7,9,10,34];
var arr2 = [1,3,6,8,32,33];
/*console.log("arr1: "+arr1);
console.log("arr2: "+arr2);*/
console.log(merge(arr1, arr2));

function merge(arr1, arr2) {
	var arr3 = [];
	for(i=0, j=0; i<arr1.length || j<arr2.length; i++, j++){
		if(typeof arr1[i] === 'undefined'){ //If arr1 exceeds its length, push the remainder of arr2 to arr3.
			arr3.push(arr2[j]);
		}
		else if(typeof arr2[j] === 'undefined'){ //If arr2 exceeds its length, push the remainder of arr1 to arr3.
			arr3.push(arr1[i]);
		}
		else if(arr1[i] < arr2[j]) { //If element of arr1 is less than element of arr2, push to arr3.
			arr3.push(arr1[i]);
			arr3.push(arr2[j]);
		}
		else if(arr2[j] < arr1[i]) { //If element of arr2 is less than element of arr1, push to arr3.
			arr3.push(arr2[j]);
			arr3.push(arr1[i]);
		}
	}
	return arr3; //Return merged array
}