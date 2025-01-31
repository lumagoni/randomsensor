RandomSensor
randomsensor is a lightweight NPM package designed to generate random sensor data, such as temperature, humidity, and raw materials. It's perfect for simulating sensor data for space exploration applications, robotics, or any project that requires random data generation for sensors.

Features
Generate Random Temperature: Generate random temperature values within a specified range.
Generate Random Humidity: Generate random humidity values within a specified range.
Generate Raw Materials: Generate random raw materials from a pre-defined list.
Installation
To install the randomsensor package, you can use npm:

bash
Copy
Edit
npm install @lumagoni/randomsensor
Usage
Here’s how to use the randomsensor package:

Example Usage
javascript
Copy
Edit
// Import the package
const randomSensor = require('@lumagoni/randomsensor');

// Generate a random temperature
const temperature = randomSensor.generateTemperature();
console.log(`Temperature: ${temperature}°C`);

// Generate a random humidity value
const humidity = randomSensor.generateHumidity();
console.log(`Humidity: ${humidity}%`);

// Generate random raw materials
const rawMaterial = randomSensor.generateRawMaterials();
console.log(`Raw Material: ${rawMaterial}`);
Methods
generateTemperature()
Generates a random temperature value between -50°C and 50°C.

Returns: A random temperature value.

javascript
Copy
Edit
const temperature = randomSensor.generateTemperature();
generateHumidity()
Generates a random humidity value between 0% and 100%.

Returns: A random humidity value.

javascript
Copy
Edit
const humidity = randomSensor.generateHumidity();
generateRawMaterials()
Generates a random raw material from a predefined list (e.g., iron ore, gold, silver, etc.).

Returns: A random raw material.

javascript
Copy
Edit
const rawMaterial = randomSensor.generateRawMaterials();
Example Output
bash
Copy
Edit
Temperature: 22°C
Humidity: 56%
Raw Material: Iron ore
License
MIT License. See the LICENSE file for more details.
