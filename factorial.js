//factorial.js

// 1. take n

// 2. multiple n by (n-1)

// 3. save total

// 4. have new n = total

// 5, mutiply new n by new n - 1

// 6. repeat until new n = 1



const factorial = function(n) {
	if (n > 1) {
		return n * factorial(n - 1)
	} else { return 1} 
}

console.log(factorial(6))