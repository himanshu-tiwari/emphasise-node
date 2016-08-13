var request = require('request');
var token = 'hi';
request('http://words.bighugelabs.com/api/2/5a921b58008ac2f5e1ea249ace1763ee/'+token+'/', function (error, response, body) {
  if (!error && response.statusCode == 200) {	
  	var array = body.split('|');
  	var array2 = [];
  	for (var i = 2; i < array.length; i+=2) {
  		// console.log(typeof(array[i]));
  		array2[i] = array[i].split('\n');
  		console.log(array2[i][0]);
  		// array2[i].toString();
  		// if (array[i].substring(-4) === "noun") {console.log("noun");};
  		// array2[i] = array[i].replace('\n','');
  		// array2[i] = array2[i].replace("\'i",'');
  	};
  	//var array2 = array.split('\n');
    // console.log(array2[2][0]) // Show the HTML for the Google homepage. 
  }
})