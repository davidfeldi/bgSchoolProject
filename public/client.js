//client.js
//
/**
 * waiting for DOM to load
 */
$(document).ready(function(){
	
	/**
	 * [requestToServer description]
	 * @return {[type]} [description]
	 */
	function requestToServer(){
	$( "form" ).submit(function( event ) {
		$( "#hideMe" ).show();
		event.preventDefault(); // Prevents the page from refreshing
	  	//showValues();
	    var $this = $(this); // `this` refers to the current form element
	    var runme = $.post(
	        '/' , //  the URL to sent the post to
	        $this.serialize(),    // Serializes form data in standard format
	        function() {
	 		});
	 		runme.done(function() {
		    	alert( "Please check results on the Charts Page" );
				location.reload();
		  	});
		});
	}
	/**
	 * [showValues description]
	 * @return {[type]} [description]
	 */
	function showValues() {
		var arrayParams = [];
	    var fields = $( ":input" ).serializeArray();
	    $( "#results" ).empty();
	    jQuery.each( fields, function( i, field ) {
	    	if (field.value){
	    		arrayParams.push(field.value);
	      		//$( "#results" ).append( field.name + ":" + field.value + " " );
	      	}
	    });
	    event.preventDefault();
	    //for checks .. print all the variables i got to array..
	 	   //for (var prop in arrayParams) {
	 	 		//$( "#arr" ).append("arr[" + prop + "] = " + arrayParams[prop] + " ");
		//}

		//$( "#results" ).empty();
		//$( "#arr" ).empty();
	}
	/**
	 * start running here;
	 */
	requestToServer();
});

