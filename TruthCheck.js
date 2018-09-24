
function truthCheck(collection, pre) {
 	// Is everyone being true?

    var result = true;

 	for (let i = 0; i < collection.length; i++) {

 		if (!collection[i].hasOwnProperty(pre)) {

 			result = false;
 			console.log('hasOwnProperty')

 		}
 		else if (collection[i][pre] == "") {
 			result = false;
 			 			console.log('empty string')

 		}
 		 else if (collection[i][pre] == 0) {
 			result = false;
 			 			console.log('zero')

 		}
 		 else if (collection[i][pre] == {}) {
 			result = false;
 			 			console.log('empty object')

 		}
 		 else if (collection[i][pre] == []) {
 			result = false;
 			 			console.log('empty array')

 		}
		 else if (collection[i][pre] == false) {
 			result = false;
 			 			console.log('false')

 		}
 		 else if (collection[i][pre] == undefined) {
 			result = false;
 			 			console.log('undefined!')

 		}
 		else if (Number.isNaN(collection[i][pre])) {
 			result = false;
 			 			console.log('NaN!')

 		}
 	}

 	console.log(result)

 	return result

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")