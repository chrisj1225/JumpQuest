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
  new Controller(char)
  let bg = new Background(GAME_WIDTH, GAME_HEIGHT);

  function startGame() {
    bg.animate(ctx);
    char.drawChar(ctx);
  }

  function gameLoop() {

  }

})