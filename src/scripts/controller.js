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
          char.crouch();   
          break;
        case 'Space':
          if (!char.jumping) {
            char.jump();
          }
          break;
      }
    })

    
  }

}