function fearNotLetter(str) {

	for (i = 1; i < str.length; i++) {

		if (str[i].charCodeAt() != str[i - 1].charCodeAt() + 1) {
			return String.fromCharCode(str[i - 1].charCodeAt() + 1);
		}

	}

}

fearNotLetter("abce");

