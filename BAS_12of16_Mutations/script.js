function mutation(arr) {
  //variable for storage of instances of equality
  var stats = 0;
  //put all the letters to lower case
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
 //loop picks first character of the tool word  
  for(var i = 0; i<arr[1].length; i++){
    //loop picks first character of the target word
    for(var j = 0; j<arr[0].length; j++){
    //if statement trying the i-th and j-th letter
    if(arr[1][i] == arr[0][j]){
      stats = stats + 1;
      //if there is a equality of two characters, go for the next letter. This fobrdis counting a equation twice, if there is a case of multiple charaters in the target word
      break;
    }
    }
  }
  //check if there were enough equality instances
      if(stats >= arr[1].length - 0){
        //return true of there is enough equality instances 
      return true;
        //return false if the equality instances is too low
    } else {
      return false;
    }
  //return the arr string
  return arr;
}

mutation(["hello", "hey"]);