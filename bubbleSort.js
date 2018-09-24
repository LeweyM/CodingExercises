// bubbleSort.js

function bubbleSort(array) {
  
  //loop through the array untill no changes are made
  let changed = false;
  let i = 0;
  while (true) {
  	console.log(array)

  	//swap with next if next is smaller
  	if (array[i] > array[i+1]) {
  		temp = array[i];
  		array[i] = array[i+1];
  		array[i+1] = temp;
  		changed = true;
  	}

  	//end case: when i is greater than array.length
  	i = i + 1;
  	if (i >= array.length) {
  		if (changed === false) {return array}
		else {
			changed = false;
			i = 0;
			} //restart array
  	}
  }
}

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array)

		//look for smallest in remaining list 
		let min = array[i]
		let swapperIndex = -1;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < min) {
				min = array[j]
				swapperIndex = j;
			}
		}

		if (swapperIndex > 0) {
			//swap with array[i]
			let temp = array[i];
			array[i] = min;
			array[swapperIndex] = temp;			
		}

	}

	return array;
}



// test array:
const test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
// const test = [4,3,2,1]

res = selectionSort(test)

console.log(res)