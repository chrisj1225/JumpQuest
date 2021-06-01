class Background {
  constructor(cWidth, cHeight) {
    this.width = cWidth;
    this.height = cHeight;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, this.width, this.height)
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }
}