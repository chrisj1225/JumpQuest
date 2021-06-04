import { peaceBg } from './util';

class Background {
  constructor(bgWidth, bgHeight) {
    this.width = bgWidth;
    this.height = bgHeight;
    this.posY = 3200;
  }

  drawBackground(ctx) {
    // ctx.fillStyle = "MistyRose";
    // ctx.fillRect(0, 0, this.width, this.height - 20);
    // ctx.fill();

    ctx.drawImage(peaceBg, 0, 0, 1000, 800, 0, 0, 1000, 800);
    ctx.fillStyle = "#003300";
    ctx.fillRect(0, this.height - 20, this.width, this.height);
    ctx.fill();
  }
}

export default Background;