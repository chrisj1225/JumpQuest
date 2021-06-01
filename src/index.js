import JumpQuest from "./scripts/game";
import "./styles/index.scss";
console.log("webpack is working properly");

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("jump-quest");
  let ctx = canvas.getContext("2d");

  const game = new JumpQuest(ctx);
  // game.start();
})