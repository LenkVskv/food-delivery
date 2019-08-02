var locations = [
	['<b>England Branch,</b><br> International city', -33.80010128657071, 151.28747820854187, 2, "https://maps.google.com/mapfiles/ms/micons/blue.png"],
	['<b>Greec Branch,</b><br> International city', -33.950198, 151.259302, 1, "https://maps.google.com/mapfiles/ms/micons/green.png"]
];
var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 10,
	center: new google.maps.LatLng(-33.92, 151.25),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		icon: locations[i][4],
		map: map
	});
	google.maps.event.addListener(marker, 'click', (function (marker, i) {
		return function () {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		}
	})(marker, i));
}