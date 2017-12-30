console.log("Truncate a string");


function truncateString(str, num) {
	if( num > 3){
	if(str.length > num){
        /* Cut a part of unwanted string */
		str = str.slice(0,num-3);
        /* Add "..." after the part of unwanted string */
		str = str.concat("...");
	}
    /* return result*/
	return str;
	}
	else{
        /* Cut a part of unwanted string */
		str = str.slice(0,num);
        /* Add "..." after the part of unwanted string */
		str = str.concat("...");
	}
  /* return result*/
  return str;
}
