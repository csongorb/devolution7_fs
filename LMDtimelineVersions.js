

// 001.apk
var markerAndroid001 = L.marker([80.5, -90.5])
.bindPopup("Android 001")
.on('click', function () {
    sidebar.open('profile');
});

// 003.apk
var markerAndroid003 = L.marker([76.5, -106.2])
.bindPopup("003.apk")
.on('click', function () {
    sidebar.open('profile');
});

// 005.apk
var markerAndroid005 = L.marker([75.5, -100.5])
.bindPopup("005.apk")
.on('click', function () {
    sidebar.open('profile');
});

// 013.apk
var markerAndroid013 = L.marker([75.5, -80.5])
.bindPopup("013.apk")
.on('click', function () {
    sidebar.open('profile');
});

// Proto March 16
var markerMarch16 = L.marker([72.5, -98.5])
.bindPopup("Proto March 16")
.on('click', function () {
    sidebar.open('profile');
});

// Proto August 16
var markerAugust16 = L.marker([72.5, -80.5])
.bindPopup("Proto August 16")
.on('click', function () {
    sidebar.open('profile');
});

// Backer Demo
var markerBackerDemo = L.marker([60.5, -118.5])
.bindPopup("Backer Demo")
.on('click', function () {
    sidebar.open('profile');
});

// Dev Access 0.1.4
var marker014 = L.marker([52.5, -50.5])
.bindPopup("Dev Access 0.1.4")
.on('click', function () {
    sidebar.open('profile');
});

// Dev Access 0.1.7
var marker017 = L.marker([40.5, -78.5])
.bindPopup("Dev Access 0.1.7")
.on('click', function () {
    sidebar.open('profile');
});

var versionMarkers = L.layerGroup([markerAndroid001, markerAndroid003, markerAndroid005, markerAndroid013, markerMarch16, markerAugust16, markerBackerDemo, marker014, marker017])
.addTo(map);

var overlayMaps = {
    "Playable Versions": versionMarkers
};

var layerControl = L.control.layers(overlayMaps, overlayMaps, {hideSingleBase: true, collapsed: false})
.addTo(map);
