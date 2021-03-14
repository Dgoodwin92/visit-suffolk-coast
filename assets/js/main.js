let map;

let townsVillages = [{
    coords: {
        /* Orford */
        lat: 52.0951785,
        lng: 1.5257991,
    },
    content: `<h4>Orford</h4>
    <h6>Woodbridge</h6>
    <div class ="info-content">
    <p>Orford is a village with historic town status in Suffolk, England, within the Suffolk Coast and Heaths AONB. It is located 9 miles east of Woodbridge.</p>
    </div>`
},
    coords: {
        /* aldeburgh */
        lat: 52.156743,
        lng: 1.5724309,
    }
}]
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.1823, lng: 1.6130 },
    zoom: 10,
  });
}
