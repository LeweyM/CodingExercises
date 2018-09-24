
function checkCashRegister(price, cash, cid) {

	// calculate change

	let change = cash - price;

	// function to calculate coin value based on array position

	function coinValue (coin) {
		let value;
		switch (coin) {
			case "PENNY":
				value = 0.01;
				break
			case "NICKEL":
				value = 0.05;
				break
			case "DIME":
				value = 0.1;
				break
			case "QUARTER":
				value = 0.25;
				break
			case "ONE":
				value = 1.0;
				break
			case "FIVE":
				value = 5.0;
				break
			case "TEN":
				value = 10.0;
				break
			case "TWENTY":
				value = 20.0;
				break
			case "ONE HUNDRED":
				value = 100.0;
				break	
		}

		return value;
	}

	// loop call function which adds largest coin to an array untill changedue is 0 or CID of that coin is empty

	function CoinToChange (changedue, cid) {

		for (let i = cid.length; i >= 0; i--) {

			if (cid[i][1] < changedue) {

				console.log (coinValue(cid[i][0]))

				return 

			}
		}
	}

	// if cointochange function cannot call, return insufficient funds.

	// otherwise, make reductions to cid from change array

	// if cid == 0 after reductions, return "closed" string.

	// format results


}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
