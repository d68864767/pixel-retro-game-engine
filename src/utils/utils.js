// Utility module for the PixelRetroGameEngine
class Utils {
  constructor() {
    console.log('Utils module created');
  }

  // Method to load a JSON file
  loadJSON(filePath) {
    return new Promise((resolve, reject) => {
      fetch(filePath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  }

  // Method to generate a random integer between min and max (inclusive)
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Method to clamp a value between min and max
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // Method to convert degrees to radians
  degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  // Method to convert radians to degrees
  radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  }
}

// Exporting the Utils class
module.exports = Utils;
