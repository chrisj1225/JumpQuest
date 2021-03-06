import "./styles/index.scss";
// import JumpQuest from "./scripts/game";
import welcomeModal from './scripts/welcome';
import Character from "./scripts/character";
import Controller from "./scripts/controller";
import Background from "./scripts/background";
import Platform from "./scripts/platform";
import Obstacle from "./scripts/obstacle";
import { beemo } from './scripts/util';
import winnerModal from './scripts/winner';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("jump-quest");
  let ctx = canvas.getContext("2d");

  // game variables
  let gameStart = false;
  const GAME_WIDTH = canvas.width; // 1000
  const GAME_HEIGHT = canvas.height; // 800
  let char = new Character(GAME_WIDTH, GAME_HEIGHT);
  new Controller(char)
  let bg = new Background(GAME_WIDTH, GAME_HEIGHT);
  let frames = 0;
  let obstacles = {};

  // controls/how-to-play variables
  let controlsShown = false;
  let controlsBtn = document.getElementById("controls-btn");
  let controls = document.getElementById('controls');

  // audio/bgm variables
  let bgm = new Audio("./src/audio/good-morning-insecure.mp3");
  let musicPlaying = false;
  let musicBtn = document.getElementById("music-btn");
  let playBtn = document.getElementById("play-btn");
  let pauseBtn = document.getElementById("pause-btn");

  controlsBtn.addEventListener("click", e => {
    e.preventDefault();
    if (controlsShown) {
      controlsShown = false;
      controls.classList.add("hidden");
      controlsBtn.classList.remove("clicked");
    } else {
      controlsShown = true;
      controls.classList.remove("hidden");
      controlsBtn.classList.add("clicked");
    };
  });

  musicBtn.addEventListener("click", e => {
    e.preventDefault();
    if (musicPlaying) {
      musicPlaying = false;
      bgm.pause();
      pauseBtn.classList.add("hidden");
      playBtn.classList.remove("hidden");
    } else {
      musicPlaying = true;
      bgm.loop = true;
      bgm.play();
      pauseBtn.classList.remove("hidden");
      playBtn.classList.add("hidden");
    }
  })

  document.addEventListener("keydown", event => {
    switch(event.code) {
      case 'Enter':
        if (!gameStart) {
          if (!musicPlaying) {
            musicPlaying = true;
            bgm.loop = true;
            pauseBtn.classList.remove("hidden");
            playBtn.classList.add("hidden");
            bgm.play();
          }
          gameStart = true;
          startGame();
          // startAnimating(240)
          break
        }
      default:
        return;
    }
  })
    
  // let fps, interval, startTime, now, then, elapsed;
  // function startAnimating(fps) {
  //   interval = 1000 / fps;
  //   then = Date.now();
  //   startTime = then;
  //   animate();
  // }

  // function animate() {
  //   now = Date.now();
  //   elapsed = now - then;
  //   if (elapsed > interval) {
  //     then = now - (elapsed % interval);
  //     gameLoop();
  //   };

  //   requestAnimationFrame(animate);
  // }

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
    ctx.drawImage(beemo, 0, 0, 33, 40, 0, 10, 33, 40);

    if ((char.position.x <= 10 ) && (char.position.y <= 10)) {
      musicPlaying = false;
      bgm.pause();
      pauseBtn.classList.add("hidden");
      playBtn.classList.remove("hidden");
      winnerModal(ctx, GAME_WIDTH, GAME_HEIGHT);
    }

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop);
    // requestAnimationFrame(animate);
  }

  // platform = [posX, posY, width]
  let platforms = {
    0: [150, 740, 100],
    1: [300, 700, 100],
    2: [450, 660, 100],
    3: [600, 620, 100],
    4: [750, 580, 100],
    5: [850, 540, 50],
    6: [800, 500, 50],
    7: [750, 460, 50],
    8: [700, 420, 50],
    9: [650, 460, 50],
    10: [600, 510, 50],
    11: [550, 460, 50],
    12: [500, 420, 50],
    13: [450, 460, 50],
    14: [400, 510, 50],
    15: [350, 460, 50],
    16: [300, 420, 50],
    17: [250, 460, 50],
    18: [200, 510, 50],
    19: [150, 460, 50],
    20: [100, 420, 50],
    21: [50, 380, 50],
    22: [100, 340, 50],
    23: [200, 300, 100],
    24: [350, 300, 100],
    25: [500, 300, 100],
    26: [650, 300, 100],
    27: [800, 250, 50],
    28: [850, 210, 50],
    29: [800, 170, 50],
    30: [750, 130, 50],
    31: [700, 170, 50],
    32: [650, 210, 50],
    33: [600, 170, 50],
    34: [550, 130, 50],
    35: [500, 90, 50],
    36: [450, 130, 50],
    37: [200, 130, 200],
    38: [125, 90, 50],
    39: [0, 50, 100],
    40: [900, 50, 100],
  };
  
  function drawPlatforms() {
    Object.values(platforms).forEach((platform, i) => {
      let p = new Platform(...platform, i);
      p.drawPlatform(ctx);
    })
  };

  // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]
  // obstacle speeds for 240 FPS.
  let newObstacles = {
    1: [750, 570, 5, "horizontal", 100, "violet", 0.1],
    2: [625, 450, 5, "horizontal", 200, "forestgreen", 0.3],
    3: [225, 450, 5, "horizontal", 200, "forestgreen", 0.3],
    4: [525, 350, 5, "vertical", 150, "skyblue", 0.3],
    5: [75, 300, 5, "vertical", 150, "skyblue", 0.3],
    6: [325, 260, 10, "vertical", 100, "crimson", 0.3],
    7: [625, 260, 10, "vertical", 100, "crimson", 0.3],
    8: [350, 260, 10, "horizontal", 250, "indigo", 0.375],
    9: [650, 195, 5, "horizontal", 250, "orange", 0.5],
    10: [600, 150, 10, "horizontal", 250, "indigo", 0.375],
    11: [525, 20, 5, "vertical", 140, "maroon", 0.3],
    12: [350, 60, 5, "vertical", 140, "MediumSlateBlue", 0.4],
    13: [250, 60, 5, "vertical", 140, "MediumSlateBlue", 0.4],
  }
  // obstacle speeds for 60 FPS.
  // let newObstacles = {
  //   1: [750, 570, 5, "horizontal", 100, "violet", 0.4],
  //   2: [625, 450, 5, "horizontal", 200, "forestgreen", 1.2],
  //   3: [225, 450, 5, "horizontal", 200, "forestgreen", 1.2],
  //   4: [525, 350, 5, "vertical", 150, "skyblue", 1.2],
  //   5: [75, 300, 5, "vertical", 150, "skyblue", 1.2],
  //   6: [325, 260, 10, "vertical", 100, "crimson", 1.2],
  //   7: [625, 260, 10, "vertical", 100, "crimson", 1.2],
  //   8: [350, 260, 10, "horizontal", 250, "indigo", 1.5],
  //   9: [650, 195, 5, "horizontal", 250, "orange", 2],
  //   10: [600, 150, 10, "horizontal", 250, "indigo", 1.5],
  //   11: [525, 20, 5, "vertical", 140, "maroon", 1.2],
  //   12: [350, 60, 5, "vertical", 140, "MediumSlateBlue", 1.6],
  //   13: [250, 60, 5, "vertical", 140, "MediumSlateBlue", 1.6],
  // }

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

  welcomeModal(ctx, gameStart, GAME_WIDTH, GAME_HEIGHT);

})