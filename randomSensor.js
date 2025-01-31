// Function to generate a random temperature
function generateTemperature() {
    return (Math.random() * (40 - (-40)) + (-40)).toFixed(2);  // Random temperature between -40 and 40
}

// Function to generate a random humidity value
function generateHumidity() {
    return (Math.random() * 100).toFixed(2);  // Random humidity between 0 and 100%
}

// Function to simulate raw material discovery
function generateRawMaterials() {
    const materials = ['Iron ore', 'Silver', 'Gold', 'Copper', 'Platinum'];
    const randomIndex = Math.floor(Math.random() * materials.length);
    return materials[randomIndex];
}

module.exports = {
    generateTemperature,
    generateHumidity,
    generateRawMaterials
};
