class Platform {
  constructor(posX, posY, width, i) {
    this.height = 20;
    this.width = width;
    this.position = {
      x: posX,
      y: posY
    }
    this.index = i;
  }

  drawPlatform(ctx) {
    ctx.fillStyle = "pink";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fill();

    // printing platform index/key & coordinates
    ctx.fillStyle = "white";
    ctx.font ="16px serif";
    ctx.fillText(`${this.index}: ${this.position.x}, ${this.position.y}`, 
      this.position.x, this.position.y+35);

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

