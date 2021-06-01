class Controller {
  constructor(char) {
    this.left = false;
    this.right = false;
    this.down = false;
    this.jump = false;

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.left = true;
          char.direction = "left";
          char.move();
          break;
        case 'ArrowRight':
          this.right = true;
          char.direction = "right";
          char.move();
          break;
        case 'ArrowDown':
          this.down = true;
          char.crouching = true;
          char.crouch();   
          break;
        case 'Space':
          this.jump = true;
          if (!char.jumping) {
            char.jumping = true
            char.jump();
          }
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.left = false;
          char.direction = "left";
          char.stop();
          break;
        case 'ArrowRight':
          this.right = false;
          char.direction = "right";
          char.stop();
          break;
        case 'ArrowDown':
          this.down = false;
          char.crouching = false;
          break;
        case 'Space':
          this.jump = false;
          char.stop();
          break;
      }
    })
  }
}

export default Controller;