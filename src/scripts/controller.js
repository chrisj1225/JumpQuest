class Controller {
  constructor(char) {
    this.keys = {};
    this.jumpSFX = new Audio("./src/audio/maple-jump-sfx.mp3")

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
        case 'KeyA':  
          this.keys[event.code] = true
          char.direction = "left";
          char.moving = true;
          char.keys = this.keys;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.keys[event.code] = true
          char.direction = "right";
          char.moving = true;
          char.updateKeys(this.keys);
          break;
        case 'ArrowDown':
        case 'KeyS':
          // this.keys[event.code] = true
          char.crouching = true;
          char.crouch();   
          break;
        case 'Space':
        case 'KeyW':
          // this.keys[event.code] = true
          if (!char.jumping && !char.falling && !char.colliding) {
            this.jumpSFX.play();
            char.jumping = true;
            char.jump();
          }
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
        case 'KeyA': 
          this.keys[event.code] = false;
          char.keys = this.keys;
          char.stop();
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.keys[event.code] = false;
          char.keys = this.keys;
          char.stop();
          break;
        case 'ArrowDown':
        case 'KeyS':
          // this.keys[event.code] = false;
          char.crouching = false;
          char.uncrouch();
          break;
        case 'Space':
        case 'KeyW':
          // this.keys[event.code] = false;
          break;
      }
    })
  }
}

export default Controller;