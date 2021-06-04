import { snowyBg } from './util';

class Background {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
  }

  drawBackground(ctx) {
    // ctx.fillStyle = "grey";
    // ctx.fillRect(0, 0, this.width, this.height - 20);
    // ctx.fill();
    ctx.drawImage(snowyBg, 0, 0, 1000, 800, 0, this.height-800, 1000, 800);
    ctx.fillStyle = "DimGrey";
    ctx.fillRect(0, this.height - 20, this.width, this.height);
    ctx.fill();
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }
}

export default Background;