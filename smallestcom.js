function SmallestCommons (arr) {
	

	if (arr[0] > arr[1]) {
		var temp = arr[0];
		arr[0] = arr[1];
		arr[1] = temp;
	}

	var commonfactor = arr[0];
	var tempcommonfactor = commonfactor;
	var newfactor = arr[0] + 1;
	var index = arr[0];

	while (index <= arr[1]) {

		newfactor = index;

		while (newfactor != commonfactor) {

			while (newfactor < commonfactor) {

				newfactor += index;

//				console.log('new factor: ' + newfactor)

			}

			while (commonfactor < newfactor) {

				commonfactor += tempcommonfactor;

//				console.log('common factor: ' + commonfactor)

			}
		}

		console.log('lowest common for ' + index + ' is ' + commonfactor)

		tempcommonfactor = commonfactor;

		index++;

	}

	return commonfactor;

}

console.log(SmallestCommons([1, 30]));