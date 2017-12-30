console.log("Check for Palindromes");

/*SOLLUTION*/

var strRev;
// This is a variable which i will operate with
function palindrome(str) {
  // Good luck!

for( i=0; i<str.length; i++ ){
str=str.toLowerCase();
//Lower the characters to base low characters "SimoN" to "simon"  
str=str.replace(' ', '');
str=str.replace('_', '');
str=str.replace(',', '');
str=str.replace('.', '');
str=str.replace(',', '');
str=str.replace(' ', '');
str=str.replace('-', '');
str=str.replace('(', '');
str=str.replace(')', '');
} 
  

strRev = str.split("");
  //reverse the values of index of characters from first to last
strRev = strRev.reverse();
  //reset into string and adding separator
strRev = strRev.join([separator = '']);
  //print a full string
  
if (str == strRev) {
return true;
} else {
return false;
}  
}

palindrome("eye");

