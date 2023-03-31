function timeout()
 {
 	console.log("Check the value of timeout");
 }

 var id1 = setTimeout(timeout,10000);
 var id2 = setTimeout(timeout,10000);

 clearTimeout(id1);