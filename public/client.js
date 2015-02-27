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
	    //console.log('testing the values from index.html');
	    //////
	    var counter = 0; //number of features to loop on 
	    var form = [];
	    form = $this.serializeArray();
        for (var i=3;i<form.length;i++){
            console.log('checks are: ' + form[i].value );

        }
	    for (var x in form) {
	    	if ((form[x].value === 'Open') || (form[x].value === 'High') || (form[x].value === 'Close') || (form[x].value === 'Low')){
	    		//console.log('evar is : ' + form[x].value);
	    		counter = counter + 1; 
	    	}
	    }
        if ( counter === 0 ) {
            alert('please select 1 feature at least...');
            location.reload();
        }else{
            localStorage.setItem("numFeatures",counter);
            var runme = $.post(
                '/' , //  the URL to sent the post to
                $this.serialize(),    // Serializes form data in standard format
                function() {
                });
            runme.done(function(data) {
                localStorage.setItem("output",data);
                alert( "Please check results on the Charts Page" );
                location.reload();
            });
        }


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

