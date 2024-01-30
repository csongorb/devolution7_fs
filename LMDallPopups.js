
const megagon_industries_sw = L.latLng(81.16875812380145, -55.95336914062501);
const megagon_industries_ne = L.latLng(82.04665216250261, -49.010009765625);
const bounds = [megagon_industries_sw, megagon_industries_ne];
const rectangle = L.rectangle(bounds, {
  color: "#66000000"
})
.bindPopup(`<a href=https://megagonindustries.com/ target="_blank" rel="noreferrer">Megagon Industries Website</a>`)
.addTo(map);
