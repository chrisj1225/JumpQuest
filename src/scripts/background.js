class Background {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, this.width, this.height)
    ctx.fill();
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }
}

export default Background;