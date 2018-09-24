
function telephoneCheck(str) {
  // Good luck!

  	var re = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}\b/;

	return str.match(re) !== null 


}



telephoneCheck("555-555-5555");

/*
valid forms


555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1(555) 555 5555
1 555) 555 5555 dalse
555 
*/

//regex

//   1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}
