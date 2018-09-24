function sym(args) {

	function symOfTwo(a, b) {

		let temp = [];

		// delete repeating numbers in each list

		function removeDuplicates (input) {
			let result  = input.filter(function(item, pos) {
				return input.indexOf(item) == pos;
			});
			return result
		};

		a = removeDuplicates(a);
		b = removeDuplicates(b);

		// merge arrays

		let merged = a.concat(b);

		//count instances of each number with counter array

		let counter = [];
		for (let i = 0; i < merged.length; i++) {

			if (counter[merged[i]] == true) {
				counter[merged[i]] = false;
			}
			else {
				counter[merged[i]] = true;
			}

		}

		// return a print of the counter array

		merged = [];

		for (let i = 0; i < counter.length; i++) {

			if (counter[i] == true) {

				merged.push(i)

			}

		}

		return merged;
	}

	// find the sym of the first two arrays

	let a = arguments[0];
	let b = arguments[1];
	let result = symOfTwo(a, b)	

	for (let i = 2; i < arguments.length; i++) {

		// then repeat for all the other arrays, comparing i + 1 and the previous result

		result = symOfTwo(result, arguments[i])

	}

	console.log(result);

	return result;

}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])