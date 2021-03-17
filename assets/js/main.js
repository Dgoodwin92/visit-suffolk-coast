let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 52.1823, lng: 1.6130},
  });
  setMarkers(map);
}

const suffolkBeaches = [
["Sizewell Beach", 52.2084, 1.6231,],
["Shingle Street", 52.0295, 1.4469,],
["Aldeburgh Beach", 52.1505, 1.6025,],
["Thorpeness Beach", 52.1780, 1.6161,],
["Dunwich Beach", 52.2685894, 1.638786,],
["Walberswick Beach", 52.3138, 1.6703,],
["The Denes Beach", 52.3197, 1.6769,],
["Covehithe Beach", 52.3692, 1.7056,],
];

const townsVillages = [
    ["Orford", 52.0947, 1.5341,],
    ["Aldeburgh", 52.1554, 1.6004,],
    ["Thorpeness", 52.1823, 1.6130,],
    ["Sizewell", 52.2080, 1.6210,],
    ["Dunwich", 52.2767, 1.6266,],
    ["Walberswick", 52.3150, 1.6614,],
    ["Southwold", 52.3256, 1.6802,],
];

const hotels = [
    ["Bawdsey hall", 52.0041, 1.4184,],
    ["Dolphin Inn", 52.1817218, 1.6147969,],
    ["White Horse Hotel", 52.2078, 1.5746,],
    ["The Eels Foot Inn", 52.2390, 1.5906,],
]

const placesToEat = [
    ["The Lighthouse", 52.1533, 1.6014,],
    ["Sole Bay Fish Co.", 52.3174179, 1.6671265,],
    ["Harbour Inn", 52.3211, 1.6620,],
    ["Red Lion", 52.3251, 1.6797,],
    ["Enzos Pizzeria", 52.3271116,1.6772508,],
    ["Beach Bistro", 52.3311407,1.6851612,],
];

locationForMarkers = [];

function setMarkers(map) {
    
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < locationForMarkers.length; i++) {
    const markers = locationForMarkers[i];
    new google.maps.Marker({
      position: { lat: markers[1], lng: markers[2] },
      map,
    animation: google.maps.Animation.DROP,
      shape: shape,
      title: markers[0],
        zIndex: markers[3],
    });
  }
}

function myFunction(arg){
    if (arg == "towns-villages"){
        locationForMarkers = townsVillages;
        initMap(townsVillages);
    }
    if (arg == "beaches"){
        locationForMarkers = suffolkBeaches;
        initMap(suffolkBeaches);
    }
    if (arg == "places-stay"){
        locationForMarkers = hotels;
        initMap(hotels);
    }
    if (arg == "eating-out"){
        locationForMarkers = placesToEat;
        initMap(placesToEat);
    }
};
function setMapOnAll(map) {
  for (let i = 0; i < locationForMarkers.length; i++) {
      console.log(locationForMarkers[i]);
    locationForMarkers[i].setMap(map);
  }
}
