// import JumpQuest from "./scripts/game";
import Character from "./scripts/character";
import Controller from "./scripts/controller";
import Background from "./scripts/background";
import "./styles/index.scss";
console.log("webpack is working properly");

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("jump-quest");
  let ctx = canvas.getContext("2d");
  const GAME_WIDTH = ctx.canvas.width;
  const GAME_HEIGHT = ctx.canvas.height;

  let char = new Character(GAME_WIDTH, GAME_HEIGHT);
  let controller = new Controller(char)
  let bg = new Background(GAME_WIDTH, GAME_HEIGHT);

  // function startGame() {
    bg.drawBackground(ctx);
    char.drawChar(ctx);
  // }

  function gameLoop() {
    // startGame();
    if (controller.left) {
      char.velocity.x -= 0.5;
    }
    if (controller.left) {
      char.velocity.x += 0.5;
    }
    if (controller.jump && !char.jumping) {
      char.velocity.y -= 20;
    }

    char.velocity.y += char.constants.gravity;
    char.position.x += char.velocity.x;
    char.position.y += char.velocity.y;
    char.velocity.x *= char.constants.friction;
    char.velocity.y *= char.constants.friction;

    // if char is falling below floor line, stop falling
    if (char.position.y > GAME_HEIGHT - char.height - 20) {
      char.jumping = false;
      char.position.y = GAME_HEIGHT - char.height - 20;
      char.velocity.y = 0;
    }

    // if char is going off screen, stop at edge of screen
    if (char.position.x == 0) {
      char.position.x = 0;
    } else if (char.position.x == GAME_WIDTH) {
      char.position.x = GAME_WIDTH - char.width;
    }
    document.requestAnimationFrame(gameLoop);
  }
  
  document.requestAnimationFrame(gameLoop);
})