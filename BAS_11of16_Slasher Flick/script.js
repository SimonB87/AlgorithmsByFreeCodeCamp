/* Sollution for the Slasher Flick - FCC */

function slasher(arr, howMany) {
  /* Create empty array for the answer */
  var result = [];
  /* cut the array from the index of 'howMany' pu till the end of the array 'howMany + arr.length' */
  result = arr.slice(howMany, howMany + arr.length);
  /* Give the back the answer */
  return result;
}


slasher([1, 2, 3], 2);