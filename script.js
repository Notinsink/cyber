// Simulating the changing status for firewall and network
document.getElementById("firewall-status").textContent = "Healthy";
document.getElementById("network-status").textContent = "Warning";

// Simulating the addition of random threats
const threatList = document.getElementById('threat-list');

// Function to generate random threats
function addThreat() {
    const threats = ["DDoS Attack", "Malware Detected", "Phishing Attempt", "SQL Injection"];
    const riskLevels = ["Low", "Medium", "High", "Critical"];
    
    const randomThreat = threats[Math.floor(Math.random() * threats.length)];
    const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];
    
    const li = document.createElement('li');
    li.textContent = `${randomThreat} - Risk: ${randomRisk}`;
    
    threatList.appendChild(li);
}

// Add a new threat every 5 seconds
setInterval(addThreat, 5000);

// Leaflet.js map
const map = L.map('map').setView([51.505, -0.09], 2);

// Load a simple tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Simulating attacks between random countries
function addAttackMarker(lat, lon, message) {
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(message).openPopup();
}

// Add attack markers (these can be random locations)
addAttackMarker(51.505, -0.09, "Attack from UK to US");
addAttackMarker(40.7128, -74.0060, "Attack from US to Russia");
