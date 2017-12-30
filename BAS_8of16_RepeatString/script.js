console.log("Repeat a string repeat a string");

/* Solution */

function repeatStringNumTimes(str, num) {
  /*Create a placeholder array*/
  var holderPlace = [];
  /*Foor loop to store values*/
  for(var i= 0; i<num;i++){
  /*push valued to placeholder*/
      holderPlace.push(str);
      }
  /*join all the itesm in array into a string*/
  str = holderPlace.join("");
  /*return the string*/
  return str;
}

repeatStringNumTimes("abc", 3);
