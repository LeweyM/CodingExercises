function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	var array = [];

	for (i = 0; i < arguments[0].length; i++) {

		var altitude = arguments[0][i].avgAlt;
		let dist = earthRadius + altitude;	

		var calc = Math.sqrt(Math.pow(dist, 3) / GM) * (Math.PI * 2);

		var obj = {}
		obj.name = arguments[0][i].name;
		obj.orbitalPeriod = Math.round(calc);
		array.push(obj);

	}

	return array;

}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
