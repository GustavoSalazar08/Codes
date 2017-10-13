function getJson() {
	xmlhttp = new XMLHttpRequest();
	
	urlPath = "data.json";
	xmlhttp.open("get", urlPath, true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			
			if(myArr.length!=0){
				
				/* NAMES */
				var keys = [];
				var auxK = [];
				for(var k in myArr) { 
					keys.push(k); //Assign all names
					for(var k2 in myArr[k].children) {
						auxK.push(k2); //Assign in another array the children
						for(var k3 in myArr[k].children[k2].children) {
							auxK.push(k3); //Assign in another array the children of children
						}
					}
				}
				
				auxK = auxK.reverse(); //Reverse the array.
				for(i=0; i<auxK.length; i++) keys.push(auxK[i]); //Assign to the original array (keys) the auxK array

				//console.log("Names: " + keys);
				
				/* DATE OF BIRTH */
				var recent = 0;
				var oldest = 10000;
				for(var k in myArr) {
					if(myArr[k].dob>recent) recent = myArr[k].dob; // Compare if the year at the current position
					if(myArr[k].dob<oldest) oldest = myArr[k].dob; // is greater or less than the value previously assigned to the variables.
					
					if(myArr[k].hasOwnProperty('children')){
						for(var k2 in myArr[k].children) {
							
							if(myArr[k].children[k2].dob>recent) recent = myArr[k].children[k2].dob;// Compare if the year at the current position is greater or less 
							if(myArr[k].children[k2].dob<oldest) oldest = myArr[k].children[k2].dob;// than the value previously assigned to the variables with children.
							
							if(myArr[k].children[k2].hasOwnProperty('children')){
								for(var k3 in myArr[k].children[k2].children) {
									
									if(myArr[k].children[k2].children[k3].dob>recent) recent = myArr[k].children[k2].children[k3].dob;// Compare if the year at the current position is greater or less 
									if(myArr[k].children[k2].children[k3].dob<oldest) oldest = myArr[k].children[k2].children[k3].dob;// than the value previously assigned to the variables with children of children.
								}
							}
						}
					}
				}
				//console.log("Oldest: "+oldest+", Recent: "+recent);
				results.setResult("Names: " + keys + "\n" + "Oldest: "+oldest+", Recent: "+recent); //Assign final results
			}
			else{
				console.log(xmlhttp.responseText);
			}
			console.log(results.getResult()); //Return the final result
		}
	}
	xmlhttp.send();
}

var results = {
	res: "",
	getResult: function() {
		return this.res;
	},
	setResult: function(resu) {
		this.res = resu;
	}
};

getJson();