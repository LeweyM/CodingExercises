
function smallestCommons(arr) {

	function getRange(a, b) {
		range = []
		if (a < b) {
			while (a <= b) {
				range.push(a)
				a++
			}
		}
		else {
			while (b <= a) {
				range.push(b)
				b++
			}
		}
		return range;
	}

	var range = getRange(arr[0], arr[1]);

	

}


smallestCommons([1,5]);

