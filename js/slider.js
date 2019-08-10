$(document).ready(function(){

	//Slider inicial
	var count = 1;
	setInterval(function() {

	   if(count == 4){
	    	count = 0;
	    }

	    $('.masthead').fadeTo('fast', 0.3);
	    $('.masthead').css('background-image', 'url(img/slider/' + count + '.jpeg)').fadeTo('fast', 1);

	    if(count == 4){
	    	return false;
	    } 

	   	count++;
	}, 5000);
	
	//Scroll a suscripción
	$('.suscribe-promo-button').on('click', function(){
		$("html, body").animate({scrollTop: $('#suscribe').offset().top }, 2000);
	});


	//Email Fake API
	$('#sendMessageButton').on('click', function(){

		$('#response-api').html('');
		$('#response-api').removeClass('alert alert-success alert-danger');

		$.ajax({
            url: 'https://apifake.d2.e2l.dev/api/newsletter/list/members',
            data: {
            	email: $('#email').val()
            },
            cache: false,
            type: 'POST',
            dataType: 'json',
            success: function(response, textStatus, request)
            {
            	if(request.status == 200){

            		$('#response-api').addClass('alert alert-success');
            		$('#response-api').html('Respuesta de la API: <strong>' + response.message + '</strong>');
            	}
            	else{
            		$('#response-api').addClass('alert alert-warning');
            		$('#response-api').html("Error al conectar a la API");
            	}

            	console.log(response);
            	console.log(request);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
		        if (XMLHttpRequest.readyState == 4) {
		            $('#response-api').addClass('alert alert-warning');
            		$('#response-api').html("HTTP Error Text: " + XMLHttpRequest.statusText);
		        }
		        else if (XMLHttpRequest.readyState == 0) {
		            $('#response-api').addClass('alert alert-danger');
            		$('#response-api').html("Error de conexión con internet");
		        }
		    }
        });
	});
});
