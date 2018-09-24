
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    // check if new item exists

    for (let i = 0; i < arr2.length; i++) {
        let newitemname = arr2[i][1];
        let itemexists = false;
        for (let j = 0; j < arr1.length; j++) {
            if (newitemname == arr1[j][1]) {
                //exists!
                arr1[j][0] += arr2[i][0];
                itemexists = true;
            }
        }
        if (itemexists == false) {
            //doesn't exist, find the correct alphabetical location and add.
            let alphabeticallylast = true;
            for (let k = 0; k < arr1.length; k++) {
                console.log('k = ' + k + ' newitemname = ' + newitemname)
                if (newitemname < arr1[k][1]) {
                    arr1.splice(k, 0, arr2[i]);
                    k++;
                    alphabeticallylast = false;
                    break;
                }
            }
            if (alphabeticallylast == true) {
                arr1.push(arr2[i]);
            }
        }
    }

    console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 


//should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].