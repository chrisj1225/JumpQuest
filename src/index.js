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
    1: [200, 4910, 100],
    2: [350, 4870, 100],
    3: [500, 4830, 100],
    4: [650, 4790, 100],
    5: [800, 4750, 100],
    6: [700, 4710, 50],
    7: [600, 4670, 50],
    8: [500, 4630, 50],
    9: [400, 4590, 50],
    10: [300, 4550, 50],
    11: [200, 4500, 50],
    12: [100, 4450, 50],
    13: [200, 4400, 50],
    14: [100, 4350, 50],
    15: [200, 4300, 50],
    16: [100, 4250, 50],
  };
  
  function drawPlatforms() {
    Object.values(platforms).forEach((platform, i) => {
      let p = new Platform(...platform, i);
      p.drawPlatform(ctx);
    })
  };

  // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]
  let newObstacles = {
    1: [800, 4740, 5, "horizontal", 100, "gold", .1],
    2: [225, 4250, 10, "vertical", 300, "crimson", 0.5],
    3: [500, 4400, 20, "horizontal", 300, "LimeGreen", 1.0],
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