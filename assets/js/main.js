let map;
var service;
var infowindow;

function initMap() {
    var suffolkCoast = new google.maps.LatLng(52.1823, 1.6130);
  map = new google.maps.Map(document.getElementById("map"), {
    center: {  lat: 52.1823, lng: 1.6130 },
    zoom: 10,
    locationBias: {radius: 50000, lat: 52.1403, lng: 1.4114  }
  });

  var request = {
    location: suffolkCoast,
    radius: '5000',
    type: ['restaurant']
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
  function createMarkers(places) {
      places.forEach(place => {
        let marker = new google.maps.Marker({
            position: place.location,
            map: map,
            title: place.name,
        });
         suffolkCoast.extend(place.geometry.location);
      });
      map.fitBounds(suffolkCoast);
    }
     
}
