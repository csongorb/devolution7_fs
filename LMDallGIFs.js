

var imageUrl = 'https://raw.githubusercontent.com/csongorb/devolution7_fs/master/images/timeline/image7.gif',
    imageBounds = [[80.5359558187302, -103.98834228515626], [81.06962428671915, -100.64849853515625]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);
//<ImageOverlay url={constants.image_7_URL} bounds={L.latLngBounds(constants.image_7_sw, constants.image_7_ne)} opacity={1}/>
//const image_7_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif'; //path to raw file stored on github
//const image_7_sw = L.latLng(80.5359558187302, -103.98834228515626); //  southwest coordinate
//const image_7_ne = L.latLng(81.06962428671915, -100.64849853515625); //  northeast coordinate
