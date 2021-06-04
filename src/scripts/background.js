import { snowyBg, peaceBg, mountainBg } from './util';

class Background {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
  }

  drawBackground(ctx) {
    // ctx.fillStyle = "grey";
    // ctx.fillRect(0, 0, this.width, this.height - 20);
    // ctx.fill();
    // ctx.drawImage(snowyBg, 0, 0, 1000, 800, 0, this.height-800, 1000, 800);
    // ctx.fillStyle = "DimGrey";
    // ctx.fillRect(0, this.height - 20, this.width, this.height);
    // ctx.fill();
    ctx.drawImage(peaceBg, 0, 0, 500, 2000, 0, 0, 1000, 4000);
    ctx.fillStyle = "peru";
    ctx.fillRect(0, this.height - 20, this.width, this.height);
    ctx.fill();
    // ctx.drawImage(mountainBg, 0, 0, 1000, 2000, 0, 0, 1000, 4000);
    // ctx.fillStyle = "peru";
    // ctx.fillRect(0, this.height - 20, this.width, this.height);
    // ctx.fill();
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }
}

export default Background;