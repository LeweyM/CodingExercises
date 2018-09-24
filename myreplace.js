
function myReplace(str, before, after) {
  var newstr = '';
  
  if (before[0] == before[0].toUpperCase() ) {
    //first char of 'before' is uppercase.
    var newafter = after.substring(1);
    newafter = after[0].toUpperCase().concat(newafter);
    console.log(newafter);
    newstr = str.replace(before, newafter);
    return newstr;
  }
  
  if (after[0] == after[0].toUpperCase() && before[0] != before[0].toUpperCase()) {
    //first char of 'before' is uppercase.
    var newafter = after.substring(1);
    newafter = after[0].toLowerCase().concat(newafter);
    console.log(newafter);
    newstr = str.replace(before, newafter);
    return newstr;
  }
  
  return newstr;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))