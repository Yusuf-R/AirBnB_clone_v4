const { ajax } = require("jquery");

$(document).ready(function(){
	let amenities = {};
	$('input[type=checkbox]').change(function() {
		if(this.checked) {
			amenities[$(this).attr('data-id')] = $(this).attr('data-name');
		}
		else {
			delete amenities[$(this).attr('data-id')];
		}
		$('div.amenities h4').text(Object.values(amenities).join(', '));
	});

url = "http://0.0.0.0:5001/api/v1/status/";
$.get(url, function(data, textStatus) {
		if (textStatus === "success" && data.status === "OK") {
			$("div#api_status").addClass("available");
		} else 	{
			$("div#api_status").removeClass("available");
		}});



// search_url = "http://0.0.0.0:5001/api/v1/places_search/
$.ajax({
	
	type: 'POST',
	url: 'http://0.0.0.0:5001/api/v1/places_search/',
	data: '{}',
	dataType: 'json',
	contentType: 'application/json',
	success: function (data) {
		for (let i = 0; i < data.length; i++) {
		  let place = data[i];
		  $('.places ').append('<article><h2>' + place.name + 
		  '</h2><div class="price_by_night"><p>$' + place.price_by_night + 
		  '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
		}
	  }

})
		
});
