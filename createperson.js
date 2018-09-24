
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName = function() {
      return fullName.split(' ')[0];
    };
    this.getLastName = function() {
      return fullName.split(' ')[1];
    };
    this.setFullName = function(firstAndLast) {
    	fullName = firstAndLast;
    	return;
    };
    this.setFirstName = function(firstAndLast) {
    	let temp = fullName.split(' ');
    	temp[0] = firstAndLast;
    	fullName = temp.join(' ')
    	return;
    };
    this.setLastName = function(firstAndLast) {
    	let temp = fullName.split(' ');
    	temp[1] = firstAndLast;
    	fullName = temp.join(' ')
    	return;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFullName('big bill');

console.log(Object.keys(bob));
console.log(bob.setLastName('dolly'))
console.log(bob.getFullName());

