var map = L.map('map', {
  //behaviour related to dragging to side
  maxBounds: [[-31.24099, -145.23926], [84.9901, -13.35938]],
  maxBoundsViscosity: 0.9
}).setView([72.59334083012024, -90.52734375], 3);

L.tileLayer('leaflet/CustomTiles/{z}/{x}/{y}.png', {
    maxZoom: 8,
    minZoom: 2,
    zoomSnap: 0.2,
    mapMaxResolution: 0.50000000,
    mapMinResolution: Math.pow(2, 8) * 0.50000000,
    noWrap: true,
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
