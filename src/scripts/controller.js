class Controller {
  constructor(char) {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          char.direction == "left";
          char.move(char.direction);
          break;
        case 'ArrowRight':
          char.direction == "right";
          char.move(char.direction);
          break;
        case 'ArrowDown':
          char.crouching == true;
          char.crouch();   
          break;
        case 'Space':
          if (!char.jumping) {
            char.jump();
          }
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          char.direction == "left";
          char.stop();
          break;
        case 'ArrowRight':
          char.direction == "right";
          break;
        case 'ArrowDown':
          char.crouching == false;
          break;
        case 'Space':
          char.stop();
          break;
      }
    })
  }
}

export default Controller;