//roman numerals 36(XXXVI)

//i, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI

// if there are three together and another is needed, a new symbol is used.
// so XXXIX(39) goes to XL (40)
//1- 100 is always the same...
//1-10 is always the same...

// 82,
// start at 100 (C)
// is bigger than 90? No, so continue to... 50(L
// is bigger than 50? No, so print L, calculate remainder (82-50=32)
// Find largest numeral less than 32 --> 10 (X)
// Print X, caluclate remainder (22)
// Find largest numeral less than 22 --> 10 X
//print x, calculate remainder (12)

// algorithm...
//find largest numeral smaller than input
//print the numeral, find the remainder,
//repeat with remainder, concatenating the strings.

// var decArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
// var romArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
// var s = '';


// function convertToRoman(num) {

// 	var numeral = '';
// 	var numeralindex = 0;
// 	var number = 0;

// 	for (i = 0; i < decArr.length; i++) {
// 		if (num < decArr[i]) {
// 			number = decArr[i-1];
// 			numeralindex = i-1;
// 			break;
// 		};
// 		if (num == decArr[i]) {
// 			number = decArr[i];
// 			numeralindex = i;
// 			break;
// 		}
// 	}

// 	s = s.concat(romArr[numeralindex]);
// 	var remainder = num - number;

// 	console.log(s)

// 	if (remainder == 0) {
// 		return s;
// 	}
// 	else {
// 		convertToRoman(remainder);
// 	}
// }

// var example = convertToRoman(86);

// console.log(example);




var decArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 5000]
var romArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M', 'V']
var s = '';


function convertToRoman(num) {

	var numeralindex = 0;
	var newnumber = 0;
	var s = '';
	var remainder = num;

	while (remainder > 0 ) {

		for (i = 0; i < decArr.length; i++) {
			if (remainder < decArr[i]) {
				newnumber = decArr[i-1];
				numeralindex = i-1;
				break;
			};
			if (remainder == decArr[i]) {
				newnumber = decArr[i];
				numeralindex = i;
				break;
			}
		}

		s = s.concat(romArr[numeralindex]);
		remainder = remainder - newnumber;

	}
	return s;
}


var example = convertToRoman(1086);

console.log(example);