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
    ctx.fillStyle = "pink"
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();
  }

}

export default Platform;

