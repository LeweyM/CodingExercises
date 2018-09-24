//binary sort

function Node(val, parent) {
	this.val = val;
	this.parent = parent;
	this.left = {};
	this.right = {};
	this.checked = false;
}

function isEmpty(obj) {
	if ((Object.keys(obj).length) == 0) {
		return true;
	} else {
		return false;
	}
}

function binarySort(newnum, currentnode) {

	//newnum only has to be a value (int)
	//currentnode has to be a node (obj)

	//for first node, if no "currentnode" exists, create a new node with the value of new node
	if (!currentnode) {
		return keynode = new Node(newnum);
	}

	if (newnum > currentnode.val) {
		//greater, so to the right
		if (isEmpty(currentnode.right) == false) {
			//run again
			binarySort(newnum, currentnode.right)
		} 
		else if (isEmpty(currentnode.right) == true) {
			//make new node here
			currentnode.right = new Node(newnum, currentnode)
			return nextnode = currentnode.right
		}
	}
	else if (newnum < currentnode.val) {
		//smaller, so to the left
		if (isEmpty(currentnode.left) == false) {
			//run again
			binarySort(newnum, currentnode.left)

		} 
		else if (isEmpty(currentnode.left) == true) {
			//make new node here
			currentnode.left = new Node(newnum, currentnode)
			return nextnode = currentnode.left
		}

	}
}



// tester stuff

var testnode = new Node(1) 
var counter = 0;
var unordered = [ 13, 47, 3, 2, 15, 21, 28, 5, 1, 853, 5351, 51256, 643, 4585, 24123, 421312, 754745, 5435, 21, 532, 643, 12, 6, 888, 432 ,351 ]


// necessary variables 

var nextnode = {};
var keynode = {};

// runtime, sort to datastruct

for (i=0; i<unordered.length; i++) {
	if (isEmpty(keynode) == false) {
		binarySort(unordered[i], keynode)
	} else if (isEmpty(keynode) == true) {
		binarySort(unordered[i])
	}
}


// how to read the data structure:
// 
// try left until fail, read node,
// try right, if exists, repeat from there,
// if right !exist, go up parent untill find an unchecked node
//
// read algorithm


function runReadBinaryTree(keynode) {
	ordered = [];
	readBinaryTree(keynode);
	return ordered
}

function readBinaryTree(currentnode) {

	if (!currentnode.parent && currentnode.checked == true) {
		return ordered
	}

	if (currentnode.checked == false) {
		//if left is available and unchecked, go repeat the loop
		if (isEmpty(currentnode.left) == false && currentnode.left.checked == false) {
			readBinaryTree(currentnode.left)
		}

		// if left not available, read it and try right,
		// if right exists and hasn't been checked, run function from there
		// if right !exist, go up to next unchecked (unread) parent, right, and continue 
		else {
			ordered.push(currentnode.val);
			currentnode.checked = true;

			if (isEmpty(currentnode.right) == false && currentnode.right.checked == false) {
				readBinaryTree(currentnode.right) 
			}
			else {
				readBinaryTree(currentnode.parent)
			}
		}
	}
	else if (currentnode.checked == true) {
		readBinaryTree(currentnode.parent)
	}
}

var result = runReadBinaryTree(keynode);

console.log(result)




