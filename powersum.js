// powersum.js

function powersum(power, val) {


// take the value, count down(n) from value to 1, testing for if n ^ 2 < val 
	console.log(val)

	for (let n = val; n > 0; n--) {

// if n ^ 2 == value, stop, the sum has been found

		if (n == 1) {
			return 
		}
		else if (Math.pow(n, power) == val) {
 			break
		} 
		else if (Math.pow(n, power) < val) {
			powersum(power, (val - Math.pow(n, power)))
		}

// if n == 1, stop, return "no powersum"

// if n ^ 2 < value, recursively call powersum with (value - n ^ 2)

	}

	return

}

powersum(2, 101)