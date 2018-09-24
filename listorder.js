var unordered = [ 2, 5, 1, 3, 9, 7, 6, 4, 8 ]


//binary sort...

//after each el, we sort either to the left or to the right, smaller or bigger. so...
// 2, next is 5, is it bigger or smaller; bigger, so we put it on the right...
// next is 1, is it bigger or smaller than 2? smaller, so on the left. There's nothing after that node, so we stop.
//next is 3, is it bigger or smaller than 2? bigger. Is it the last node? no, there is 5, so compare that (recursive)...

var firstnode = new Node(unordered[0])


for (i=1; i < unordered.length; i++) {
	binarySort(firstnode, unordered[i]);
}


//first one



function Node(val, parent) {
	this.val = val;
	this.left = null;
	this.right = {};
//	this.parent = parent;
}

//console.log(firstnode)


function binarySort(currentnode, el) {
	if (el < currentnode.val) {
		if (currentnode.left.isEmpty == true) {
			currentnode.left = new Node(el, currentnode)
		} else {
			//recursive function call here on lower node
			binarySort(currentnode.left, el)
			console.log("recursion happening!")
		}

	}
	else if (el > currentnode.val) {
		if (currentnode.right.isEmpty == true) {
			currentnode.right = new Node(el, currentnode)
		} else {
			//recursive function
			binarySort(currentnode.right, el)
						console.log("recursion happening!")

		}
	}
}

//first, make a new node because there isn't one.
//then, make a new node left or right

if (firstnode.left) {
	console.log("exists")
} else if (!firstnode.left) {
	console.log("doesnt exist")
}


//psudo code..

//1. take an element, if its the first element, make a new node
//2. if not the first element, compare el[i] with the first node.
//3. if el[i] is smaller than first node...
//3.2 && if firstnode.left is empty...
//3.3 then make firstnode.left = el[i]
//3.4 if firstnode.left != empty...
//3.5 run loop again, with firstnode.left as firstnode, and el[i] as el[i]
//4. else if el[i] is bigger than first node... && if firstnode.right is empty... then make firstnode.right = el[i]
//5.






























