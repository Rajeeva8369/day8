var map = L.map('map').setView([46.603354, 1.888334], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var schools = [
    { city: "Paris", coords: [48.8566, 2.3522] },
    { city: "Bordeaux", coords: [44.8378, -0.5792] },
    { city: "Lyon", coords: [45.7640, 4.8357] },
    { city: "Nantes", coords: [47.2184, -1.5536] },
    { city: "Toulouse", coords: [43.6045, 1.4442] },
    { city: "Marseille", coords: [43.2965, 5.3698] },
    { city: "Lille", coords: [50.6292, 3.0573] },
    { city: "Nice", coords: [43.7102, 7.2620] }
];
var epitechIcon = L.icon({
    iconUrl: 'epitech.jpeg', 
    iconSize: [38, 38]});
var epitechLayer = L.layerGroup();
schools.forEach(school => {
    L.marker(school.coords, { icon: epitechIcon })
     .addTo(epitechLayer)
     .bindPopup(`${school.city} rocks!`);});
epitechLayer.addTo(map);
var bounds = schools.map(school => school.coords);
map.fitBounds(bounds, { padding: [50, 50] });
