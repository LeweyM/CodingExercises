function pairwise(arr, arg) {

	let res = [0];

	for (let i = 0; i < arr.length; i++) {

		let temp = [];

		for (let j = 0; j < arr.length; j++) {

			if (i != j && arr[i] + arr[j] == arg && arr[i] != null && arr[j] != null) {

				temp.push([i, j])

				console.log('arr[i] is ' + arr[i]);
				console.log('arr[j] is ' + arr[j]);
				console.log('i is ' + i);
				console.log('j is ' + j);
				console.log(' ');

			}
		}

		if (temp.length > 1) {

			let smallest = 0

			console.log(temp)

			for (let k = 0; k < temp.length; k++) {

				if (temp[k][0] + temp[k][1] > smallest) { smallest = [temp[k][0], temp[k][1]] };

			}

			res.push(smallest[0] + smallest[1])
				arr[smallest[0]] = null;
				arr[smallest[1]] = null;
			i = 0;
		}

		if (temp.length == 1) {

			temp = temp[0]


			res.push(temp[0] + temp[1])
			arr[temp[0]] = null;
			arr[temp[1]] = null;
			i = 0;

		}

	console.log(arr)

	console.log('res is ' + res)

	}

	return res.reduce(function (a, b) {
		return a + b;
	})

}

pairwise([], 100)