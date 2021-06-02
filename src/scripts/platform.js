class Platform {
  constructor(posX, posY, width) {
    this.height = 20;
    this.width = width;
    this.position = {
      x: posX,
      y: posY
    }
  }

  drawPlatform(ctx) {
    ctx.fillStyle = "pink";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();

    // testing platform boundaries
    // ctx.beginPath();
    // ctx.strokeStyle = "blue";
    // ctx.moveTo(this.position.x, this.position.y);
    // ctx.lineTo(this.position.x, 0);
    // ctx.moveTo(this.position.x+this.width, this.position.y);
    // ctx.lineTo(this.position.x+this.width, 0);
    // ctx.stroke();
  } 

}

export default Platform;

