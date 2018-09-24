function checkCashRegister(price, cash, cid) {
	// Here is your change, ma'am.

	const originalCid = JSON.parse(JSON.stringify(cid));

	const billLookUp = {
		"PENNY": 0.01,
		"NICKEL": 0.05,
		"DIME": 0.1,
		"QUARTER": 0.25,
		"ONE": 1,
		"FIVE": 5,
		"TEN": 10,
		"TWENTY": 20,
		"ONE HUNDRED": 100 
	}

	const getChange = function(remainingToGive, changeToReturn, currentCid, i) {

		if (i === undefined) {
			i = currentCid.length - 1
		}

		if (remainingToGive == 0) return {changeToReturn, currentCid}
		if (i < 0) return false;

		let billValue = billLookUp[currentCid[i][0]];
		let billsToBeUsed = Math.floor(remainingToGive / billValue);
		if (billsToBeUsed * billValue > currentCid[i][1]) {
			billsToBeUsed = Math.floor(currentCid[i][1] / billValue);
		}

		currentCid[i][1] -= billsToBeUsed * billValue;
		if (billsToBeUsed > 0) {
			changeToReturn.push([currentCid[i][0], billsToBeUsed * billValue]);
		}
		return getChange(
			(remainingToGive - (billsToBeUsed * billValue)).toFixed(2),
			changeToReturn,
			currentCid,
			--i)
	}

	const cidIsEmpty = function(cid, i) {
		if (i === undefined) {
			i = cid.length - 1
		}
		if (i < 0) return true 
		else {
			if (cid[i][1] > 0) return false;
			else return cidIsEmpty(cid, --i)
		}
	}

	const result = getChange(cash - price, [], cid)
	if (result) {
		if ( cidIsEmpty(result.currentCid) ) return {status: "CLOSED", change: originalCid}
		else return {status: "OPEN", change: result.changeToReturn}
	}
	else return {status: "INSUFFICIENT_FUNDS", change: []}
	

}

let test = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(test)