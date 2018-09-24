
function sumPrimes(num) {

	//prime sieve

	var notPrimeList = [];
	var primeList = [];

	for (i = 2; i <= num; i++) {

		if (!notPrimeList.includes(i)) {
			console.log('new prime! : ' + i)
			primeList.push(i)
			var factor = i
			while (factor <= num) {
				if (!notPrimeList.includes(factor)) {
					notPrimeList.push(factor);
				}
				factor += i;	
			}
		}
	}

	// sum array

	return primeList.reduce(function (a, b) {
		return a + b
	});



}

sumPrimes(300);

