console.log("Return Largest Numbers in Arrays");

/*SOLLUTION*/

function largestOfFour(arr) {
  var largestArray = [];//create empty array
  for(var i = 0; i<arr.length; i++){
    //Placeholder to find largest number   in Array
    var largestNumber = 0;
    
      for(var j = 0; j<arr.length; j++){
        //if you find a larger number put in in the largest number
        if(largestNumber < arr[i][j]){
          largestNumber = arr[i][j];
        }
      }
    //Add Largest number in the placeholder
    largestArray.push(largestNumber);
      }
  
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);