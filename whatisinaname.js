
function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line

	for (i = 0; i < collection.length; i++) {
		var match = true;
		for ( j = 0; j < Object.keys(source).length; j++) {

			var key = Object.keys(source)[j];
			console.log(key)
			
			if (collection[i][key] != source[key]) {
				match = false;
			}
		}
		if (match == true) {
			arr.push(collection[i])
		}
	}

	console.log(arr)

	// Only change code above this line
	return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
