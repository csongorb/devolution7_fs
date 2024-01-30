var map = L.map('map');
map.setView([72.59334083012024, -90.52734375], 3);

L.tileLayer('https://csongorb.github.io/devolution7_fs/leaflet/CustomTiles/{z}/{x}/{y}.png', {
    mapExtent: [0.00000000, -39288.00000000, 33000.00000000, 0.00000000],
    maxZoom: 8,
    minZoom: 2,
    mapMaxResolution: 0.50000000,
    mapMinResolution: Math.pow(2, 8) * 0.50000000,
    noWrap: true,
    tileExtent: [0.00000000, -39288.00000000, 33000.00000000, 0.00000000],
    attribution: 'Map data &copy; Devolution'
}).addTo(map);

// close sidebar
map.on('click', function() {
    sidebar.close();
} );

L.marker([50.5, 30.5])
.addTo(map)
.on('click', function () {
    sidebar.open('home');
});

var sidebar = L.control.sidebar('sidebar').addTo(map);
