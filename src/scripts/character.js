class Character {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 75;
    this.height = 100;
    this.direction = "right";
    this.crouching = "false";
    this.jumping = false;
    this.falling = false;
    this.position = {
      x: 300,
      y: this.gameHeight - this.height - 20,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.constants = {
      gravity: 1,
      friction: 0.9,
    };
  }

  drawChar(ctx) {
    ctx.fillStyle = "white"
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  move() {
    if (this.direction == "left") {
      
    } else {

    }
  }

  stop() {
    
  }

}

export default Character;