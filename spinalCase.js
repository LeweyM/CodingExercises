
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var regexp = /\s+|_+/g;

  str = str.replace(regexp, ' ');
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  
  str = str.toLowerCase();
  str = str.replace(/ /g, '-');

  console.log(str)

  return str;
}

spinalCase("thisIsSpinalTap")