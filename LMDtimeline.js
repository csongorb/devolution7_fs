var map = L.map('map');
map.setView([72.59334083012024, -90.52734375], 3);

L.tileLayer('leaflet/CustomTiles/{z}/{x}/{y}.png', {
    mapExtent: [0.00000000, -39288.00000000, 33000.00000000, 0.00000000],
    maxZoom: 8,
    minZoom: 2,
    mapMaxResolution: 0.50000000,
    mapMinResolution: Math.pow(2, 8) * 0.50000000,
    noWrap: true,
    tileExtent: [0.00000000, -39288.00000000, 33000.00000000, 0.00000000],
    attribution: '&copy; Devolution'
}).addTo(map);

// close sidebar
map.on('click', function() {
    sidebar.close();
} );

// tool: show location of mouse-click
//map.on('click', function(ev) {
//    alert(ev.latlng);
//});

var sidebar = L.control.sidebar('sidebar').addTo(map);
