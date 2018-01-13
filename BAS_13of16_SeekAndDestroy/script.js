/* Seek and Destroy - Sollution to the algorithm */

function destroyer(arr) {
// Remove all the items
var args = Array.prototype.slice.call(arguments);
//get full array with items
args.slice(0,1);
//remove original array
var placeholder = [];

for(var i = 0; i <arr.length; i++){
  for(var j = 0; j <args.length; j++){
    //Delete all the items which match each other
    if(arr[i]==args[j]){
      delete arr[i];
    }
  }
}
placeholder=arr.filter(removeFalseItems);
//filter out falsy values
return placeholder;  
}  
function removeFalseItems(value){
  return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);