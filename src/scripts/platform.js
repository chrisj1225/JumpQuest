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
    if (this.position.y >= 3750) {
      ctx.fillStyle = "SaddleBrown";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    } else {
      ctx.fillStyle = "gold",
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    // ctx.fill();
    // ctx.fillStyle = "snow";
    // ctx.fillRect(this.position.x, this.position.y, this.width/2, 6);
    // ctx.fillRect(this.position.x + this.width/2, this.position.y, this.width/2, 5);
    // ctx.fill();

    // ctx.fillStyle = "pink";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    
    // printing platform index/key & coordinates
    ctx.fillStyle = "black"; 
    ctx.font ="14px serif";
    ctx.fillText(`${this.index}: ${this.position.x}, ${this.position.y}`, 
      this.position.x, this.position.y+33);

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

