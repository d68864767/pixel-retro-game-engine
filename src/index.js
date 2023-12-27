// Importing necessary modules
const Core = require('./engine/core');
const Graphics = require('./engine/graphics');
const Input = require('./engine/input');
const Audio = require('./engine/audio');
const Physics = require('./engine/physics');
const Utils = require('./utils/utils');

class PixelRetroGameEngine {
  constructor() {
    this.core = new Core();
    this.graphics = new Graphics();
    this.input = new Input();
    this.audio = new Audio();
    this.physics = new Physics();
    this.utils = new Utils();
  }

  // Method to initialize the game engine
  initialize() {
    this.core.initialize();
    this.graphics.initialize();
    this.input.initialize();
    this.audio.initialize();
    this.physics.initialize();
  }

  // Method to start the game loop
  start() {
    this.core.start();
  }

  // Method to stop the game loop
  stop() {
    this.core.stop();
  }
}

// Exporting the PixelRetroGameEngine class
module.exports = PixelRetroGameEngine;
