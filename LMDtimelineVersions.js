

// 001.apk
var markerAndroid001 = L.marker([80.30163, -88.69263])
.bindPopup(`<h3 align="center">Android 003</h3>
            <div align="center">
              <small>Polished Prototype</small><br />
              October 19th 2015<br />
              <img src="images/versions/android_003_small.jpg" width="150" height="150" alt="Android_001"></img><br />
              <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/151019_downhill_003.apk"><img src="images/platforms/androidicon.png" width="40" height="40" alt="Android"></img></a><br />
            </div>`)
.on('click', function () {
    //sidebar.open('versions');
});

// 003.apk
var markerAndroid003 = L.marker([76.91315, -108.11096])
.bindPopup(`<div align="center">
              <big><b>downhill_003.apk</b></big><br />
              October 19th 2015<br />
              <small>Polished Prototype</small><br />
              <br />
              <small>Download & play:</small><br />
              <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/151019_downhill_003.apk"><img src="images/platforms/androidicon.png" width="40" height="40" alt="Android"></img></a><br />
              <small><a onclick="sidebar.open('versions')" href="#">Disclaimer & more</a></small>
            </div>`)
.on('click', function () {
    //sidebar.open('versions');
});

// 005.apk
var markerAndroid005 = L.marker([75.89479, -98.65723])
.bindPopup("005.apk")
.on('click', function () {
    sidebar.open('versions');
});

// 013.apk
var markerAndroid013 = L.marker([75.86396, -75.99243])
.bindPopup("013.apk")
.on('click', function () {
    sidebar.open('versions');
});

// Proto March 16
var markerMarch16 = L.marker([73.25363, -94.51538])
.bindPopup("Proto March 16")
.on('click', function () {
    sidebar.open('versions');
});

// Proto August 16
var markerAugust16 = L.marker([72.61697, -73.63037])
.bindPopup("Proto August 16")
.on('click', function () {
    sidebar.open('versions');
});

// Backer Demo
var markerBackerDemo = L.marker([61.7939, -113.25806])
.bindPopup("Backer Demo")
.on('click', function () {
    sidebar.open('versions');
});

// Dev Access 0.1.4
var marker014 = L.marker([52.563, -55.17883])
.bindPopup("Dev Access 0.1.4")
.on('click', function () {
    sidebar.open('versions');
});

// Dev Access 0.1.7
var marker017 = L.marker([42.13897, -84.4519])
.bindPopup("Dev Access 0.1.7")
.on('click', function () {
    sidebar.open('versions');
});

var versionMarkers = L.layerGroup([markerAndroid001, markerAndroid003, markerAndroid005, markerAndroid013, markerMarch16, markerAugust16, markerBackerDemo, marker014, marker017])
.addTo(map);

var overlayMaps = {
    "Playable Versions": versionMarkers
};

var layerControl = L.control.layers(overlayMaps, overlayMaps, {hideSingleBase: true, collapsed: false})
.addTo(map);
