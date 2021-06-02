class Character {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 50;
    this.height = 80;
    this.direction = "right";
    this.moveSpeed = .75;
    this.jumpHeight = -12;
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
      gravity: 0.15,
      friction: 0.9,
    };
    this.keys = {};
  }

  drawChar(ctx) {
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
  }

  updateKeys(keys) {
    this.keys = keys;
  }

  stop() {
    this.velocity.x = 0;
    this.velocity.y = 0;
  }

  jump() {
    // console.log(keys)
    if (this.jumping) {
      this.velocity.y = this.jumpHeight
    }
  }

  crouch() {
    this.height = 40;
  }

  uncrouch() {
    this.height = 80;
  }

  update() {
    // check current key presses
    if (this.keys['ArrowLeft']) {
      this.velocity.x = -this.moveSpeed;
    } else if (this.keys['ArrowRight']) {
      this.velocity.x = this.moveSpeed;
    }
    
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.velocity.y += this.constants.gravity;
    this.velocity.x *= this.constants.friction;
    this.velocity.y *= this.constants.friction;

    // if char is falling below floor line, stop falling
    if (this.position.y > this.gameHeight - this.height - 20) {
      this.jumping = false; // char is no longer jumping when landed
      this.position.y = this.gameHeight - this.height - 20;
      this.velocity.y = 0;
    }

    // if char is going off screen, stop at edge of screen
    if (this.position.x <= 0) {
      this.position.x = 0;
    } else if (this.position.x >= this.gameWidth - this.width) {
      this.position.x = this.gameWidth - this.width;
    }
  }

}

export default Character;