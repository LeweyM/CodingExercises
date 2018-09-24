function dropElements(arr, func) {
  // Drop them elements.

  for (i = 0; i < arr.length; i++) {

  	if (func(arr[i]) == true) {

  		return arr.slice(i, arr.length)

  	}

  }

  return arr;
  
}

var res = dropElements([1, 2, 3, 4], function(n) {return n >= 3; });

console.log(res);