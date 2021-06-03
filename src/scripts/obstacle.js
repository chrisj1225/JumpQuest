class Obstacle {
  constructor(posX, posY, radius) {
    this.radius = radius;
    this.position = {
      x: posX,
      y: posY
    }
  }

  drawObstacle(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
  } 

}

export default Obstacle;

