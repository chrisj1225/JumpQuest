class Background {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, this.width, this.height - 20);
    ctx.fill();
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, this.height - 20, this.width, this.height);
    ctx.fill();
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }
}

export default Background;