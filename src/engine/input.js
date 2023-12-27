// Input module for the PixelRetroGameEngine
class Input {
  constructor() {
    this.keys = {};
    this.mouse = {
      x: 0,
      y: 0,
      clicked: false
    };
  }

  // Method to initialize the input module
  initialize() {
    console.log('Input module initialized');

    // Keyboard event listeners
    window.addEventListener('keydown', (event) => {
      this.keys[event.key] = true;
    });

    window.addEventListener('keyup', (event) => {
      this.keys[event.key] = false;
    });

    // Mouse event listeners
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    });

    window.addEventListener('mousedown', () => {
      this.mouse.clicked = true;
    });

    window.addEventListener('mouseup', () => {
      this.mouse.clicked = false;
    });
  }

  // Method to check if a key is pressed
  isKeyPressed(key) {
    return this.keys[key] || false;
  }

  // Method to get the mouse position
  getMousePosition() {
    return this.mouse;
  }

  // Method to check if the mouse is clicked
  isMouseClicked() {
    return this.mouse.clicked;
  }
}

// Exporting the Input class
module.exports = Input;
