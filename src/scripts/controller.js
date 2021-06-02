class Controller {
  constructor(char) {
    this.keys = {};

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.keys[event.code] = true
          char.direction = "left";
          char.move(this.keys);
          console.log(char);
          break;
        case 'ArrowRight':
          this.keys[event.code] = true
          char.direction = "right";
          char.move(this.keys);
          console.log(char);
          break;
        case 'ArrowDown':
          this.keys[event.code] = true
          char.crouching = true;
          char.crouch();   
          console.log(char);
          break;
        case 'Space':
          this.keys[event.code] = true
          if (!char.jumping) {
            char.jumping = true;
            char.jump(this.keys);
          }
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.keys[event.code] = false;
          char.direction = "left";
          char.stop();
          break;
        case 'ArrowRight':
          this.keys[event.code] = false;
          char.direction = "right";
          char.stop();
          break;
        case 'ArrowDown':
          this.keys[event.code] = false;
          char.crouching = false;
          char.uncrouch();
          break;
        case 'Space':
          this.keys[event.code] = false;
          // char.jumping = false;
          // char.stop();
          break;
      }
    })
  }
}

export default Controller;