class Controller {
  constructor(char) {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          char.direction = "left";
          char.move();
          break;
        case 'ArrowRight':
          char.direction = "right";
          char.move();
          break;
        case 'ArrowDown':
          char.crouching = true;
          char.crouch();   
          break;
        case 'Space':
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
          char.direction = "left";
          char.stop();
          break;
        case 'ArrowRight':
          char.direction = "right";
          char.stop();
          break;
        case 'ArrowDown':
          char.crouching = false;
          break;
        case 'Space':
          char.stop();
          break;
      }
    })
  }
}

export default Controller;