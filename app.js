//
//
//  very minimal web server to run our Stocks work
//
//

/**
 * express declaration
 */
var express = require('express');
var app = express();

/**
 * logger declaration
 */
var logger = require('./logger');
app.use(logger);

/**
 * serve static files from public folder
 */
app.use(express.static('public'));

/**
 * [bodyParser /pasing middlware]
 * @type {[type]}
 */
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var queryString = require('querystring');
var S = require('string');

// app.get ('/', function(req,res){
// 	res.sendFile(__dirname + '/public/index.html');
// });

/**
 * Automatically parses form data
 */
app.use(bodyParser());  

/**
 * [Post route will run the JAR with syncExec mode wait for the jar to finish]
 * @param  {[type]} req                          [description]
 * @param  {String} res){console.log(req.body);	var paramList [description]
 * @return {[type]}                              [description]
 */
app.post('/',parseUrlencoded,function(req,res){
	console.log(req.body);
	//pushing all request params into array
	var paramArr = [];
	for(var x in req.body){
	  paramArr.push(req.body[x]);
	}
	//getting the Features parameters into a diff array
	var param3Arr = [] ;
	param3Arr = S(paramArr[3]).parseCSV(',', "'"); 
	
    //console.log ('param3Arr is now ' + param3Arr);
    //console.log('param3Arr size is : ' + param3Arr.length);

    var arrwithOpen = (param3Arr.indexOf("Open") > -1);
    var arrwithHigh = (param3Arr.indexOf("High") > -1);
    var arrwithLow = (param3Arr.indexOf("Low") > -1);
    var arrwithClose = (param3Arr.indexOf("Close") > -1);
    var featuresArr = [] ; //new arranged arr

    if (arrwithOpen !== true){
        featuresArr[0] = 'noOpen';
    } else {
        featuresArr[0] = 'Open';
    }
    if (arrwithHigh !== true){
        featuresArr[1] = 'noHigh';
    } else {
        featuresArr[1] = 'High';
    }
    if (arrwithLow !== true){
        featuresArr[2] = 'noLow';
    } else {
        featuresArr[2] = 'Low';
    }
    if (arrwithClose !== true){
        featuresArr[3] = 'noClose';
    } else {
        featuresArr[3] = 'Close';
    }
    console.log ('Features final arr  is now ' + featuresArr);

    paramArr.pop(); //taking the last param out of the arr...
    var numClusters = paramArr.pop();
	var paramList='';
	for (var x in paramArr) {
		paramList = paramList + paramArr[x] + ' ';
	}
	for (var x in featuresArr) {
		paramList = paramList + featuresArr[x] + ' ';
	}
    paramList = paramList + numClusters;
	console.log('paramlist is now ' + paramList);
	/**
	 * [runJar run the jar from commandline]
	 * @return {[type]} [description]
	 */
	function runJar() {
		var exec = require('child_process').execSync, child;
		//var command = 'java koko.jar' + paramList;
		var command = 'ls -l';
		console.log('command to run is : ' + command);
		child = exec(command,
	  	function (error, stdout, stderr){
		    console.log('stdout: ' + stdout);
		    //console.log('stderr: ' + stderr);
	    	if(error !== null){
	    	    console.log('exec error: ' + error);
	    	}
		});
	}
	var fs = require('fs');
	runJar();
	console.log('done with runJar');
	var contents = fs.readFileSync('./final.txt').toString();
	console.log('done with compute chart data');
	res.send(contents);

});
/**
 * return status code 404 to all routes that are not found
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	res.status(404).send('404');} [description]
 * @return {[type]}      [description]
 */
app.get('*', function(req, res) {
	res.status(404).send('404');
});

/**
 * listen on the app on port 3000
 * @param  {[type]} ){	console.log("Running, listening     on port 3000")} [description]
 * @return {[type]}                           [description]
 */
app.listen(3000,function(){
	console.log("Running, listening on port 3000");
});

