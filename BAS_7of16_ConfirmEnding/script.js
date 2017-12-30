console.log("Confirm the Ending");

/*SOLLUTION*/

function confirmEnding(str, target) {

/*Variable for finding the length of the string*/
var i = str.length;
/*Variable for finding the length of the target string with the given ending*/
var j = target.length;
/*Create a string which takes the string and slices just the part, where the observed ending should be*/ 
var ending = str.slice(i-j, i-1+j+1);
/*Statement compares if the discussed string has the real taget ending*/ 
if( ending == target) {
return true;} 
  else {
return false;}
  
}

confirmEnding("Bastian", "n");