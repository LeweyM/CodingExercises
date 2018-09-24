
function diffArray(arr1, arr2) {

	var newArr = arr1.concat(arr2);

	newArr = newArr.filter(function (el) {
		return !arr1.includes(el) || !arr2.includes(el);
	});

	return newArr;
}


diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5]);
//diffArray2(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
