let map;

let townsVillages = [{
    coords: {
        /* Orford */
        lat: 52.0951785,
        lng: 1.5257991,
    },
    content: `<h4>Orford</h4>
    <h6>Woodbridge</h6>
    <div class="info-content">
    <p>Orford is a village with historic town status in Suffolk, England, within the Suffolk Coast and Heaths AONB. It is located 9 miles east of Woodbridge.</p>
    </div>`
},
{
    coords: {
        /* aldeburgh */
        lat: 52.156743,
        lng: 1.5724309,
    },
    content: `<h4>Aldeburgh</h4>
    <div class="info-content">
    <p>Aldeburgh is a North Sea coastal English town in the county of Suffolk, north of the River Alde. Its estimated population was 2,276 in 2019. 
    It was home to the composer Benjamin Britten and has been the centre of the international Aldeburgh Festival of arts at nearby Snape Maltings, founded by Britten in 1948</p>
    </div>`
},
{
    coords: {
        /* thorpeness */
        lat: 52.1817486,
        lng: 1.6055685,
    },
    content: `<h4>Thorpeness</h4>
    <h6>Leiston</h6>
    <div class="info-content">
    <p>Thorpeness is a seaside village in the East Suffolk district of Suffolk, England, which developed in the early 20th century into a holiday village. 
    It belongs to the parish of Aldringham cum Thorpe and lies within the Suffolk Coast and Heaths AONB</p>
    </div>`
},
{
    coords: {
        /* sizewell */
        lat: 52.2090689,
        lng: 1.6008716,
    },
    content: `<h4>Sizewell</h4>
    <h6>Leiston</h6>
    <div class="info-content">
    <p>Sizewell is an English fishing hamlet in the East Suffolk district of Suffolk, England. 
    It belongs to the civil parish of Leiston and lies on the North Sea coast just north of the larger holiday village of Thorpeness, between the coastal towns of Aldeburgh and Southwold</p>
    </div>`
},
{
    coords: {
        /* dunwhich */
        lat: 52.2753981,
        lng: 1.6185666,
    },
    content: `<h4>Dunwich</h4>
    <h6>Saxmundham</h6>
    <div class="info-content">
    <p>Dunwich is a village and civil parish in Suffolk, England. 
    It is in the Suffolk Coast and Heaths AONB around 92 miles north-east of London, 9 miles south of Southwold and 7 miles north of Leiston, on the North Sea coast.</p>
    </div>`
},
{
    coords: {
        /* walberswick */
        lat: 52.3150063,
        lng: 1.6526432,
    },
    content: `<h4>Walberswick</h4>
    <h6>Southwold</h6>
    <div class="info-content>
    <p>Walberswick is a village and civil parish on the Suffolk coast in England. It is at the mouth of the River Blyth on the south side of the river. 
    The town of Southwold lies to the north of the river and is the nearest town to Walberswick, around 1 mile away.</p>
    </div>`
},
{
    coords: {
        /* Southwold */
        lat: 52.3226251,
        lng: 1.6549622,
    },
    content: `<h4>Southwold</h4>
    <div class="info-content>
    <p>Southwold is a small town and civil parish on the English North Sea coast in the East Suffolk district of Suffolk. 
    It lies at the mouth of the River Blyth within the Suffolk Coast and Heaths Area of Outstanding Natural Beauty.</p>
    </div>`
},
];

let suffolkBeaches = [{
    /* Sizewell beach */
    coords: {
        lat: 52.1190045,
        lng: 1.3019764,
    },
    content: `<h4>Sizewell Beach</h4>
    <h6>Leiston IP16 4UH</h6>`
},
{
    coords: {
        /*shingle street */
        lat: 52.0294722,
        lng: 1.1666965,
    },
    content: `<h4>Shingle Street</h4>
    <h6>Unnamed Road, Woodbridge IP12 3BE</h6>`
},
{
    coords: {
        /*aldeburgh beach */
        lat: 52.0653732,
        lng: 1.4363053,
    },
    content: `<h4>Aldeburgh Beach</h4>
    <h6>Crag Path, Aldeburgh IP15 5BP</h6>`
},
{
    coords: {
        /* thorpeness beach */
        lat: 52.0653732,
        lng: 1.4363053,
    },
    content: `<h4>Thorpeness Beach</h4>
    <h6>Leiston IP16 4NT</h6>`
},
{
    coords: {
        /* dunwich beach */
        lat: 52.2685894,
        lng: 1.638786,
    }, 
    content: `<h4>Dunwich Beach</h4>
    <h6>Dunwich, Saxmundham IP17 3EN</h6>`
},
{
    coords: {
        /* walberswick beach */
        lat: 52.3292069,
        lng: 1.4317759,
    },
    content: `<h4>Walberswick Beach</h4>
    <h6>Southwold IP18 6ND</h6>`
},
{
    coords: {
        /* the denes beach */
        lat: 52.3292069,
        lng: 1.4317759,
    },
    content: `<h4>The Denes Beach</h4>
    <h6>Ferry Rd, Southwold IP18 6HQ</h6>`
},
{
    coords: {
        /* covehithe beach */
        lat: 52.3292069,
        lng: 1.4317759,
    },
    content: `<h4>Covehithe Beach</h4>
    <h6>Covehithe, Beccles NR34 7JW</h6>`
},
];

let hotels = [{
    coords: {
        /* bawdsey hall */
        lat: 52.0040644,
        lng: 1.1382763,
    },
    content: `<h4>Bawdsey Hall</h4>
    <h6>Ferry Rd, Woodbridge IP12 3AS</h6>
    <div class="info-content">
    <p>http://www.bawdseyhall.com/</p>
    </div>`
},
{
    coords: {
        /* Run Cottage Touring Park */
        lat: 52.0040644,
        lng: 1.1382763,
    },
    content: `<h4>Run Cottage Touring Park</h4>
    <h6>Alderton Rd, Hollesley, Woodbridge IP12 3RQ</h6>
    <div class="info-content">
    <p>http://www.runcottage.co.uk/</p>
    </div>`
},
{
    coords: {
        /* Dolphin Inn */
        lat: 52.0040644,
        lng: 1.1382763,
    },
    content: `<h4>Dolphin Inn</h4>
    <h6>Peace Place, Thorpeness, Aldeburgh, Leiston IP16 4FE</h6>
    <div class="info-content">
    <p>http://www.thorpenessdolphin.com/</p>
    </div>`
},
{
    coords: {
        /* white horse hotel */
        lat: 52.1433429,
        lng: 1.3950887,
    },
    content: `<h4>White Horse Hotel</h4>
    <h6>Station Rd, Leiston IP16 4HD</h6>
    <div class="info-content">
    <p>http://www.whitehorseleiston.com/</p>
    </div>`
},
{
    coords: {
        /* the eels foot inn */
        lat: 52.1433429,
        lng: 1.3950887,
    },
    content: `<h4>The Eels Foot Inn</h4>
    <h6>School Cottages, East Bridge, Leiston IP16 4SN</h6>
    <div class="info-content">
    <p>http://www.theeelsfootinn.co.uk/</p>
    </div>`
},
];

let placesEat = [{
    /*The Lighthouse*/
    coords: {
        lat: 52.1592041,
        lng: 1.5000553,
    },
    content: `<h4>The Lighthouse</h4>
    <h6>77 High St, Aldeburgh IP15 5AU</h6>
    <div class="info-content">
    <p>Restaurant open for morning coffee/lunch/dinner, with outdoor tables and an emphasis on local fish.</p>
    <p>http://www.lighthouserestaurant.co.uk/contact</p>
    </div>`
},
{
    coords: {
        /*sole bay fish co. */
        lat: 52.2990048, 
        lng: 1.5982507,
    },
    content: `<h4>Sole Bay Fish Company</h4>
    <h6>22E Blackshore, Southwold IP18 6ND</h6>
    <div class="info-content">
    <p>Each day this smokehouse venue catches its own fish to be prepared and sold inhouse.</p>
    <p>http://www.solebayfishco.co.uk/</p>
    </div>`
},
{
    coords: {
        /*harbour inn */
        lat: 52.3143188,
        lng: 1.6471759,
    },
    content: `<h4>Harbour Inn</h4>
    <h6>Black Shore, Southwold IP18 6TA</h6>
    <div class="info-content">
    <p>Boating themed decoration includes signalling flags and old photos at this casual riverfront pub.</p>
    <p>http://www.harbourinnsouthwold.co.uk/</p>
    </div>`
},
{
    coords: {
        /*red lion*/ 
        lat: 52.3225528,
        lng: 1.6767882,
    },
    content: `<h4>Red Lion</h4>
    <h6>2 S Green, Southwold IP18 6ET</h6>
    <div class="info-content">
    <p>Pub/restaurant with rustic cuisine and beer from the town brewery, as well as weekly live music.</p>
    <p>+441502723227</p>
    </div>`
},
{
    coords: {
        /*enzos pizzeria*/
        lat: 52.3225528,
        lng: 1.6767882,
    },
    content: `<h4>Enzo's Pizzeria</h4>
    <h6>51A High St, Southwold IP18 6DJ</h6>
    <div class="info-content">
    <p>https://enzospizzeria.co.uk/latestmenu</p>
    </div>`
},
{
    coords: {
        /*beach bistro*/
        lat: 52.3558218,
        lng: 1.6034296,
    },
    content: `<h4>Beach Bistro</h4>
    <h6>Pier, Southwold IP18 6BN</h6>
    <div class="info-content">
    <p>+441502722105</p>
    </div>`
},
];

var selectedLocations

function initMap(selectedLocations) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.1823, lng: 1.6130 },
    zoom: 10,
  });
}
if (selectedLocations) {
        for (let i = 0; i < selectedLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: selectedLocations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });
            const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });
            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });
            var currentInfoWindow = null;
        }
    }
document.getElementById("towns-villages").addEventListener("click", () => {
    initMap(townsVillages);
});
document.getElementById("beaches").addEventListener("click", () => {
    initMap(suffolkBeaches);
});
document.getElementById("places-stay").addEventListener("click", () => {
    initMap(hotels);
});
document.getElementById("eating-out").addEventListener("click", () => {
    initMap(placesEat);
});

