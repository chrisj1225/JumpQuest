import { finnBeemo } from './util';

const winnerModal = (ctx, GAME_WIDTH, GAME_HEIGHT) => {
  ctx.fillStyle = "lightslategrey";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.fillStyle = "snow";
  ctx.font = 'bold 50px arial';
  ctx.fillText("You saved Beemo!", 270, 75);
  finnBeemo.onload = function() {
    ctx.drawImage(finnBeemo, 200, 350, 728, 409);
  }
};

export default winnerModal;