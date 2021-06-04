import "./styles/index.scss";
// import JumpQuest from "./scripts/game";
import Character from "./scripts/character";
import Controller from "./scripts/controller";
import Background from "./scripts/background";
import Platform from "./scripts/platform";
import Obstacle from "./scripts/obstacle";
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
  let obstacles = {};

  document.addEventListener("keydown", event => {
    switch(event.code) {
      case 'Enter':
        startGame();
        break
      default:
        return;
    }
  })
    
  function startGame() {
    gameLoop();
    requestAnimationFrame(gameLoop);
  }

  function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.drawBackground(ctx);
    drawPlatforms();
    updateObstacles();
    drawObstacles();
    // write algorithm to only pass in platforms & obstacles in current vp
    char.update(Object.values(platforms), Object.values(obstacles));
    char.drawChar(ctx, frames);

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop);
  }

  // platform = [posX, posY, width]
  let platforms = {
    1: [200, 3910, 100],
    2: [350, 3870, 100],
    3: [500, 3830, 100],
    4: [650, 3790, 100],
    5: [800, 3750, 100],
    6: [700, 3710, 50],
    7: [600, 3670, 50],
    8: [500, 3630, 50],
    9: [400, 3590, 50],
    10: [300, 3550, 50],
    11: [200, 3500, 50],
    12: [100, 3450, 50],
    13: [200, 3400, 50],
    14: [100, 3350, 50],
    15: [200, 3300, 50],
    16: [100, 3250, 50],
  };
  
  function drawPlatforms() {
    Object.values(platforms).forEach((platform, i) => {
      let p = new Platform(...platform, i);
      p.drawPlatform(ctx);
    })
  };

  // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]
  let newObstacles = {
    1: [800, 3740, 5, "horizontal", 100, "violet", .1],
    2: [225, 3250, 10, "vertical", 300, "crimson", 0.5],
    3: [500, 3400, 20, "horizontal", 300, "LimeGreen", 1.0],
  }

  createObstacles();
  
  function createObstacles() {
    Object.values(newObstacles).forEach((obstacle, i) => {
      obstacles[i] = new Obstacle(...obstacle);;
    })
  };

  function updateObstacles() {
    Object.values(obstacles).forEach(obstacle => {
      obstacle.update();
    });
  };

  function drawObstacles() {
    Object.values(obstacles).forEach(obstacle => {
      obstacle.drawObstacle(ctx);
    });
  };

})