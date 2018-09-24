
function smallestCommons(arr) {

	if (arr[0] > arr[1]) {
		var temp = arr[0];
		arr[0] = arr[1];
		arr[1] = temp;
	}

	var denom = arr[0];
	var numer = arr[0] + 1;
	var counter = numer;

	while (counter <= arr[1]) {

		var tempdenom = denom;

		while (denom != numer) {

			denom += tempdenom;

			console.log('denominator =  ' + denom)

			while (numer < denom) {

				numer += counter

				console.log('numerator =  ' + numer)

			}

		}

		console.log('lowest factor up to ' + counter + ' found')
		counter++;
	//	numer = counter;
	}

	console.log(denom)

}

var i = 1
while (i < 2) {
	smallestCommons([1, 7]);
	i++
}

/*

3,4,5,6,7,8

sequential pairs have smallest com of a*b...
above example will need smallest com of 12,20,35,


*/



