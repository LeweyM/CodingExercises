
function translatePigLatin(str) {

	var vowels = ['a', 'e', 'i', 'o', 'u'];

	var arr = str.split('');

	for (i = 0; i < arr.length; i++ ) {
		if (vowels.includes(arr[i]) ) {
			if (i == 0) { 
				return str.concat('way') 
			}
			var newstr = str.substring(i);
			return newstr + str.substring(0, i) + 'ay';
		}
	}
}

console.log(translatePigLatin("glove"));

//if word begins with vowel
//just add 'way' to end

//else

//find first consonante,
//move it to the end
//add 'ay'
