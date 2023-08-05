
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
});
