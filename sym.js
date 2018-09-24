
function sym(args) {

	function uniq(a) {
	    return a.sort().filter(function(item, pos, ary) {
	        return !pos || item != ary[pos - 1];
	    })
	}

	for (let i = 0; i < arguments.length; i++) {
		arguments[i] = uniq(arguments[i])
	}

	console.log(arguments)

	let merged = [];
	for (let i = 0; i < arguments.length; i++) {

		merged = merged.concat(arguments[i])

	}

	let biggest = merged.reduce(function(a, b) {
		return Math.max(a, b)
	})

	let counters = Array.apply(null, Array(biggest + 1)).map(Number.prototype.valueOf,0);

	for (let i = 0; i < merged.length; i++) {

		counters[merged[i]] += 1;

	}

	merged = [];

	for (let i = 0; i < counters.length; i++) {

		if (counters[i] == 1 || counters[i] > 2) {
			merged.push(i);
		}

	}

	console.log(counters)
	console.log(merged)
	return merged
		
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])

/*

 can be multiple arguements, must use argument object.

 loop through arguemtsn, concatentating,

 then loop through all the arguements elements, deleting if in the merged version

*/