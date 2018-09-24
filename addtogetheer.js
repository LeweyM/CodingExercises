
function addTogether() {

	console.log(arguments)

  if (arguments.length == 2 &&
  	Number.isInteger(arguments[0]) &&
  	Number.isInteger(arguments[1])
  	) {

  	return arguments[0] + arguments[1];

  }
  else if (arguments.length == 1 && Number.isInteger(arguments[0])) {

  	var sum = arguments[0];

  	return function (input) {

  		if (Number.isInteger(input)) {
	  		console.log(sum)
	  		console.log(input)
	  		return sum + input;  			
  		}
  	}
  }
}

addTogether(2)([3])
