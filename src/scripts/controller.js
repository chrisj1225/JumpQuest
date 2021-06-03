class Controller {
  constructor(char) {
    this.keys = {};

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.keys[event.code] = true
          char.direction = "left";
          char.moving = true;
          char.keys = this.keys;
          break;
        case 'ArrowRight':
          this.keys[event.code] = true
          char.direction = "right";
          char.moving = true;
          char.updateKeys(this.keys);
          break;
        case 'ArrowDown':
          // this.keys[event.code] = true
          char.crouching = true;
          char.crouch();   
          break;
        case 'Space':
          // this.keys[event.code] = true
          if (!char.jumping && !char.falling) {
            char.jumping = true;
            char.jump();
          }
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.keys[event.code] = false;
          char.keys = this.keys;
          char.stop();
          break;
        case 'ArrowRight':
          this.keys[event.code] = false;
          char.keys = this.keys;
          char.stop();
          break;
        case 'ArrowDown':
          // this.keys[event.code] = false;
          char.crouching = false;
          char.uncrouch();
          break;
        case 'Space':
          // this.keys[event.code] = false;
          break;
      }
    })
  }
}

export default Controller;