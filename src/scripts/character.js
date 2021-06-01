class Character {
  constructor(ctx) {
    this.gameWidth = ctx.canvas.width;
    this.gameHeight = ctx.canvas.Height;
    this.width = 75;
    this.height = 100;
    this.direction = "right";
    this.crouching = "false";
    this.jumping = false;
    this.falling = false;
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 5,
      y: 10,
    };
  }

  move() {
    if (this.direction == "left") {
      
    } else {

    }
  }


}

export default Character;