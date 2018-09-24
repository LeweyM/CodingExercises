
function pairElement(str) {

	var arr = str.split('');
	var newarr = [];

	for (i = 0; i < arr.length; i++) {



		if (arr[i] == 'G') {newarr.push(['G', 'C'])}
		if (arr[i] == 'C') {newarr.push(['C', 'G'])}
		if (arr[i] == 'A') {newarr.push(['A', 'T'])}
		if (arr[i] == 'T') {newarr.push(['T', 'A'])}

	}

  	return newarr;
}

console.log(pairElement("GCG"));


//at, cg