let map;
var service;
var infowindow;

function initMap() {
    const suffolkCoastal = new google.maps.LatLng (52.1539301, 1.4746412);
  map = new google.maps.Map(document.getElementById("map"), {
    center: suffolkCoastal,
    zoom: 10,
  });

  var request = {
      location: suffolkCoastal,
      radius: '1000',
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
}

   /* const contentString = '<h1>The Suffolk Coast</h1>';
    const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

    var marker = new google.maps.Marker({
        position: suffolkCoastal,
        map: map,
        title: "Suffolk Coast",
        });
     
        marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
      } */ 





