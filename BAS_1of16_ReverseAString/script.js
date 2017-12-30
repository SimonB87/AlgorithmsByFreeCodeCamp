console.log("Reverse a String");

/*SOLLUTION*/

function reverseString(str) {
  //split the string into an arraz of characters 
str = str.split("");
  //reverse the values of index of characters from first to last
str = str.reverse();
  //reset into string and adding separator
str = str.join([separator = '']);
  //print a full string
return str;
 
}

reverseString("hello");