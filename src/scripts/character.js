import { finnRight, finnLeft } from './util';

class Character {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 64;
    this.height = 40;
    this.direction = "right";
    this.moveSpeed = .75;
    this.jumpHeight = -10;
    this.crouching = false;
    this.jumping = false;
    this.falling = false;
    this.isColliding = true;
    this.position = {
      x: 100,
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
    // testing character boundaries
    // ctx.strokeStyle = "green";
    // ctx.moveTo(this.position.x+20, this.position.y);
    // ctx.lineTo(this.position.x+20, 0);
    // ctx.moveTo(this.position.x+this.width-30, this.position.y);
    // ctx.lineTo(this.position.x+this.width-30, 0);
    // ctx.stroke();

    if (this.direction == 'left') {
      if (this.jumping || this.falling) { 
        ctx.drawImage(finnLeft, 448, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
      } else if (this.isColliding) {
        ctx.drawImage(finnLeft, 416, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
      } else if (this.moving) {
        if (frames < 20) {
          ctx.drawImage(finnLeft, 544, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (frames > 20 && frames < 40) { 
          ctx.drawImage(finnLeft, 512, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnLeft, 480, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        };
      } else {
        if (frames < 40) {
          ctx.drawImage(finnLeft, 864, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnLeft, 800, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        };
      };
    } else if (this.direction == 'right') {
      if (this.jumping || this.falling) {
        ctx.drawImage(finnRight, 480, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
      } else if (this.moving) {
        if (frames < 20) {
          ctx.drawImage(finnRight, 320, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (frames > 20 && frames < 40) { 
          ctx.drawImage(finnRight, 384, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnRight, 416, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        };
      } else {
        if (frames < 40) {
          ctx.drawImage(finnRight, 0, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else {
          ctx.drawImage(finnRight, 64, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        }
      }
    }
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
    this.height = 20;
  }

  uncrouch() {
    this.height = 40;
    this.velocity.y = -5;
  }

  update(platforms, obstacles) {
    // check current key presses
    if (this.keys['ArrowLeft']) {
      this.velocity.x = -this.moveSpeed;
    } else if (this.keys['ArrowRight']) {
      this.velocity.x = this.moveSpeed;
    } else {
      this.moving = false;
    }

    // char movements
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.velocity.y += this.constants.gravity;
    this.velocity.x *= this.constants.friction;
    this.velocity.y *= this.constants.friction;

    // if char is going off screen, stop at edge of screen
    if (this.position.x <= 0) {
      this.position.x = 0;
    } else if (this.position.x >= this.gameWidth - this.width) {
      this.position.x = this.gameWidth - this.width;
    }

    // **Write code to filter out platforms NOT in current view frame**
    // check if char is standing on any platform
    // else check if char is falling below floor line
    // else char is currently falling
    for (let i=0; i<platforms.length; i++) {
      let platform = platforms[i];
      if (this.onPlatform(this.position, platform)) {
        this.falling = false;
        this.jumping = false;
        this.position.y = platform[1]-this.height;
        this.velocity.y = 0;
        break;
      } else if (this.position.y >= this.gameHeight-this.height-20) {
        this.jumping = false;
        this.falling = false;
        this.position.y = this.gameHeight - this.height - 20;
        this.velocity.y = 0;
        break;
      } else {
        this.falling = true;
      };
    }

    // **Write code to filter out obstacles NOT in current view frame**
    for (let i=0; i<obstacles.length; i++) {
      let obstacle = obstacles[i];
      if (this.collisionDetection(obstacle)) {
        // console.log('collision!');
        this.isColliding = true;
        if (obstacle.orientation == 'vertical') {
          if (this.direction == 'left') {
            this.position.x += 10;
          } else {
            this.position.x -= 10;
          }
        } else {
          if (obstacle.direction = 'RD') {
            this.position.x -= 10;
          } else {
            this.position.x += 10;
          }
        }
        break;
      } else {
        this.isColliding = false;
      }
    }

  };

  onPlatform(charPos, platform) {
    // charPos = {
    //   x: charPosX,
    //   y: charPosY,
    // }
    // platform = [posX, posY, width]
    if (this.crouching) {
      if (((charPos.x + this.width -15) >= platform[0]) &&
      ((charPos.x+15) <= (platform[0]+platform[2])) &&
      ((charPos.y + 20) <= platform[1]) &&
      ((charPos.y + 20) >= platform[1]-2)){
          return true
      };
    } else {
      if (((charPos.x + this.width -15) >= platform[0]) &&
      ((charPos.x+15) <= (platform[0]+platform[2])) &&
      ((charPos.y + 40) <= platform[1]) &&
      ((charPos.y + 40) >= platform[1]-2)){
          return true
      };
    };
  }

  // return true if an obstacle collides with user
  collisionDetection(obstacle) {
    let o = {
      x: obstacle.position.x,
      y: obstacle.position.y,
      r: obstacle.radius
    };
    let c = {
      x: this.position.x + 20,
      y: this.position.y,
      w: this.width-30,
      h: this.height
    }

    // find horiz/vert distance b/w center of obstacle & character
    let distX = Math.abs(o.x - c.x - c.w/2);
    let distY = Math.abs(o.y - c.y - c.h/2);

    // return false if dist is greater than min dist b/w edges (x or y)
    if ((distX > (c.w/2 + o.r)) || (distY > (c.h/2 + o.r))) {return false};

    // return true if dist is <= char width/2
    if ((distX <= (c.w/2)) && (distY <= (c.h/2))) {return true};

    // dx & dy = dist b/w obstacle center & char edge (x & y)
    let dx = distX - c.w / 2;
    let dy = distY - c.h / 2;

    // use pythagorean theorem to see if radius^2  
    // is greater than hypotenuse of dx^2 + dy^2 
    // if greater, object and char are colliding (true)
    return (Math.pow(dx,2) + Math.pow(dy,2) <= Math.pow(o.r,2));
  }

}

export default Character;