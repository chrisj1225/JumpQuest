class Obstacle {
  constructor(posX, posY, radius, orientation, travelLength, color, speed) {
    this.initPos = {
      x: posX,
      y: posY
    };
    this.position = {
      x: posX,
      y: posY
    };
    this.radius = radius;
    this.orientation = orientation;
    this.travelLen = travelLength
    this.color = color;
    this.speed = speed;
    this.direction = "RD"; // LU = left/up, RD = right/down (dep. on orientation)
  }

  drawObstacle(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
  } 

  update() {
    // set direction obstacle should move based on current position (RD/LU)
    if (this.orientation == "horizontal") {
      if (this.position.x <= this.initPos.x) {
        this.direction = "RD"
      } else if (this.position.x >= this.initPos.x + this.travelLen) {
        this.direction = "LU"
      } else {
        this.direction = this.direction;
      };
    } else if (this.orientation == "vertical") {
      if (this.position.y <= this.initPos.y) {
        this.direction = "RD"
      } else if (this.position.y >= this.initPos.y + this.travelLen) {
        this.direction = "LU"
      } else {
        this.direction = this.direction;
      };
    } else if (this.direction === "static") {
      
    };
    
    // move obstacle according to its direction
    if (this.orientation == "horizontal") {
      if (this.direction == "RD") {
        this.position.x += this.speed
      } else {
        this.position.x -= this.speed
      };
    } else if (this.orientation == "vertical") {
      if (this.direction == "RD") {
        this.position.y += this.speed
      } else {
        this.position.y -= this.speed
      };
    }
  }

}

export default Obstacle;

