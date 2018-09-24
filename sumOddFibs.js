
function sumFibs(num) {

	var previous = 0;
	var current = 1;
	var sum = [1];
	var temp;
	while (current < num) {

		temp = (previous + current)
		if (temp % 2 != 0 && temp <= num ) {
			sum.push(previous + current);
		}
		previous = current;
		current = temp;

		console.log(sum)
		
	}

	function sumArray(arr) {
		var sum = 0;
		for (i = 0; i < arr.length; i ++) {
			sum += arr[i]
		}
		return sum;
	}

  return sumArray(sum)
}

sumFibs(1000);

// 1, 1, 2, 3, 5, 8, 13, 21

// [i] + [i-1] = [i+1]