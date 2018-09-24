
function steamrollArray(arr) {
  // I'm a steamroller, baby

  var newarr = [];

  function flatten(arg) {

  	if (Array.isArray(arg)) {

  		arg.forEach(flatten);

  	}
  	else {

  		newarr.push(arg)

  	}

  }

  arr.forEach(flatten);

  return newarr;

}

var res = steamrollArray([1, [2], [3, [[4]]]]);

console.log(res)
