console.log("Find the Longest Word in a String");

/*SOLLUTION*/

function findLongestWord(str) {
  var arrayOfStrings=str.split(" ");//Break up the string into array
  var longestString = "";//Temporarz holder for the longest string

  for (var i=0;i<arrayOfStrings.length;i++){
    if(longestString.length<arrayOfStrings[i].length)
      longestString=arrayOfStrings[i];
  }//iterate through the array and compare longest string with current string
  str = longestString;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
