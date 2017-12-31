console.log("Chunky Monkey");

function chunkArrayInGroups(arr, size) {
  /*Create empty variable for the results*/
  var placeHolder = [];
  /*Create a counter for continuing the loop*/
  var counter = 0;
    
  while (counter < arr.length) {
    /*Function for puting the separated arrays in the target array*/
    placeHolder.push(arr.slice(counter, counter+size));
    /*Increase the size of the count*/
    counter += size;
  }
  
  return placeHolder;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
