import { finnRight, finnLeft } from './util';

class Character {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 64;
    this.height = 64;
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

  drawChar(ctx, frames) {
    if (this.direction == 'left') {
      if (this.jumping) { 
        ctx.drawImage(finnLeft, 448, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
      } else if (this.moving) {
        if (frames < 20) {
          ctx.drawImage(finnLeft, 544, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        } else if (frames > 20 && frames < 40) { 
          ctx.drawImage(finnLeft, 512, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnLeft, 480, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        };
      } else {
        if (frames < 40) {
          ctx.drawImage(finnLeft, 864, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnLeft, 800, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        };
      };
    } else if (this.direction == 'right') {
      if (this.jumping) {
        ctx.drawImage(finnRight, 480, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
      } else if (this.moving) {
        if (frames < 20) {
          ctx.drawImage(finnRight, 320, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        } else if (frames > 20 && frames < 40) { 
          ctx.drawImage(finnRight, 384, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnRight, 416, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        };
      } else {
        if (frames < 40) {
          ctx.drawImage(finnRight, 0, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnRight, 64, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
        }
      }
    }

    // ctx.fillStyle = "white"
    // ctx.beginPath();
    // ctx.rect(this.position.x, this.position.y, this.width, this.height);
    // ctx.fill();
  }

  updateKeys(keys) {
    this.keys = keys;
  }

  stop() {
    this.velocity.x = 0;
    this.velocity.y = 0;
  }

  jump() {
    if (this.jumping) {
      this.velocity.y = this.jumpHeight
    }
  }

  crouch() {
    this.height = 32;
  }

  uncrouch() {
    this.height = 64;
  }

  update() {
    // check current key presses
    if (this.keys['ArrowLeft']) {
      this.velocity.x = -this.moveSpeed;
    } else if (this.keys['ArrowRight']) {
      this.velocity.x = this.moveSpeed;
    } else {
      this.moving = false;
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