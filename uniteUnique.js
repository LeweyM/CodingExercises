
function uniteUnique(arr) {

	combined = [];


	for (i = 0; i < arguments.length; i++) {

		for (j=0; j < arguments[i].length; j++) {

			combined.push(arguments[i][j]);

		}

	}

	console.log(combined)

	var list = [];

	for (i = 0; i < combined.length; i++) {

		if (!list[combined[i]] && list[combined[i]] !== 0 ) { 
			list[combined[i]] = i ; 
			if (Array.isArray(combined[i]) == true) {
				list[combined[i]] =[i] ;
			}
		}
	}

// 0 
// 1 -- 0
// 2 -- 2
// 3 -- 1
// 4 -- 6
// 5 -- 3

// , ,0, 2, 1, 6, 3

	console.log(list);

	var array = []
  
	for (i = 1; i < list.length; i++) {

		if (list[i] || list[i] === 0) {
			array[list[i]] = i;
			if (Array.isArray(list[i]) == true) {
				array[list[i]] = [i] ;
			}
		}

	}

	function clean(dirtyarr) {
		for (i = 0; i < dirtyarr.length; i++) {
			if (!dirtyarr[i]) {
				dirtyarr.splice(i, 1);
				i--;
			}
		}
		return dirtyarr
	}

  console.log(array)

  console.log(clean(array))
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]])

//1,3,2,5,4

