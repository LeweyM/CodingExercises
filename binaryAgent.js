
function binaryAgent(str) {

  function binaryParser(str) {

  	var charcode = 0;

  	for (let i = 0; i < str.length; i++) {

  		charcode += str[i] * Math.pow(2, (7-i))

  	}
  	return charcode;
  }



  letter = str.split(' ')
  var phrase = '';

  for (let i = 0; i < letter.length; i++ ) {

  	var character = String.fromCharCode(binaryParser(letter[i]))
  	phrase = phrase.concat(character)
  }

  console.log(phrase)
  return phrase;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

