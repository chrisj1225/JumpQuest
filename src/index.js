import "./styles/index.scss";
// import JumpQuest from "./scripts/game";
import Character from "./scripts/character";
import Controller from "./scripts/controller";
import Background from "./scripts/background";
import Platform from "./scripts/platform";
console.log("webpack is working properly");

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("jump-quest");
  let ctx = canvas.getContext("2d");
  const GAME_WIDTH = ctx.canvas.width;
  const GAME_HEIGHT = ctx.canvas.height;

  let char = new Character(GAME_WIDTH, GAME_HEIGHT);
  new Controller(char)
  let bg = new Background(GAME_WIDTH, GAME_HEIGHT);
  let frames = 0;
  // platform = [posX, posY, width]
  let platforms = {
    1: [500, 4910, 100],
    2: [650, 4890, 100]
  };

  document.addEventListener("keydown", event => {
    switch(event.code) {
      case 'Enter':
        startGame();
        break
    }
  })

  function startGame() {
    gameLoop();
    requestAnimationFrame(gameLoop);
  }

  function gameLoop() {
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.drawBackground(ctx);
    drawPlatforms();
    char.update(Object.values(platforms));
    char.drawChar(ctx, frames);

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop);
  }

  function drawPlatforms() {
    Object.values(platforms).forEach(platform => {
      let p = new Platform(...platform);
      p.drawPlatform(ctx);
    })
  }

})