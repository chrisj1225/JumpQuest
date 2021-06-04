class Platform {
  constructor(posX, posY, width, i) {
    this.height = 15;
    this.width = width;
    this.position = {
      x: posX,
      y: posY
    }
    this.index = i;
  }

  drawPlatform(ctx) {
    ctx.fillStyle = "khaki",
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    // ctx.fillStyle = "SaddleBrown",
    // ctx.fillRect(this.position.x, this.position.y, this.width, 5);

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

