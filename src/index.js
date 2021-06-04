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
  const GAME_WIDTH = canvas.width; // 1000
  const GAME_HEIGHT = canvas.height; // 800

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
    1: [200, 710, 100],
    2: [350, 670, 100],
    3: [500, 630, 100],
    4: [650, 590, 100],
    5: [800, 550, 100],
    6: [700, 510, 50],
    7: [600, 470, 50],
    8: [500, 430, 50],
    9: [400, 390, 50],
    10: [300, 350, 50],
    11: [200, 300, 50],
    12: [100, 250, 50],
    13: [200, 200, 50],
    14: [100, 150, 50],
    15: [200, 100, 50],
    16: [100, 50, 50],
  };
  
  function drawPlatforms() {
    Object.values(platforms).forEach((platform, i) => {
      let p = new Platform(...platform, i);
      p.drawPlatform(ctx);
    })
  };

  // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]
  let newObstacles = {
    1: [800, 540, 5, "horizontal", 100, "violet", .1],
    2: [225, 50, 10, "vertical", 300, "crimson", 0.5],
    3: [500, 200, 20, "horizontal", 300, "LimeGreen", 1.0],
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