class Character {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 50;
    this.height = 80;
    this.direction = "right";
    this.speed = 5;
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
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
  }

  move() {
    if (this.direction == "left") {
      this.velocity.x = -this.speed;
    } else {
      this.velocity.x = this.speed;
    }
  }

  stop() {
    this.velocity.x = 0;
  }

  jump() {
    if (this.jumping) {
      this.position.y = this.velocity.y
    }
  }

  crouch() {
    this.height = 40;
  }

  uncrouch() {
    this.height = 80;
  }

  render() {
    this.velocity.y += this.constants.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x *= this.constants.friction;
    this.velocity.y *= this.constants.friction;

    // if char is falling below floor line, stop falling
    if (this.position.y > this.gameHeight - this.height - 20) {
      this.jumping = false;
      this.position.y = this.gameHeight - this.height - 20;
      this.velocity.y = 0;
    }

    // if char is going off screen, stop at edge of screen
    if (this.position.x == 0) {
      this.position.x = 0;
    } else if (this.position.x == this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

}

export default Character;