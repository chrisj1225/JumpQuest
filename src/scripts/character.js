class Character {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 50;
    this.height = 80;
    this.direction = "right";
    this.moveSpeed = 1;
    this.jumpHeight = -10;
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
  }

  drawChar(ctx) {
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
  }

  move(keys) {
    console.log(keys);
    if ((this.direction == "left") && (keys['ArrowLeft'])) {
      this.velocity.x -= this.moveSpeed;
    } else if ((this.direction == "right") && (keys['ArrowRight'])) {
      this.velocity.x += this.moveSpeed;
    }
  }

  stop() {
    this.velocity.x = 0;
    this.velocity.y = 0;
  }

  jump(keys) {
    console.log(keys)
    if (this.jumping && keys['Space']) {
      this.velocity.y += this.jumpHeight
    }
  }

  crouch() {
    this.height = 40;
  }

  uncrouch() {
    this.height = 80;
  }

  update() {
    // if (controller.left || controller.right) {
    //   this.position.x += this.velocity.x;
    // }
    // if (controller.jump && !char.jumping) {
    //   this.position.y += this.velocity.y;
    // }
    
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