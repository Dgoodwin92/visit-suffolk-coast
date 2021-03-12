let map;
var service;
var infowindow;

function initMap() {
    const suffolkCoastal = new google.maps.LatLng (52.1539301, 1.4746412);
  map = new google.maps.Map(document.getElementById("map"), {
    center: suffolkCoastal,
    zoom: 10,
    mapId: '50f5268b5225a2a4',
  });
var request = {
    location: suffolkCoastal,
    radius: 1000,
    type: ['beach']
};
var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
}
}


var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



