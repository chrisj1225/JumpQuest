import { finnRight, beemo } from './util';
const welcomeModal = (ctx, gameStart, GAME_WIDTH, GAME_HEIGHT) => {

  if (!gameStart) {
    ctx.fillStyle = "lightslategrey";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "snow";
    ctx.font = 'bold 50px arial';
    ctx.fillText("Welcome to Jump Quest!", 225, 60);
    ctx.font = 'bold 30px arial';
    ctx.fillText("Beemo          is lost!", 75, 150);
    ctx.fillText("Help Finn        navigate across the platforms to find him.", 75, 225);
    ctx.fillText("Be sure to dodge the flying obstacles using crouch or jump.", 75, 300);
    ctx.fillText("If you get hit, you may have to start from an earlier position.", 75, 375);

    ctx.font = 'bold 20px arial';
    ctx.fillText("- Horizontally moving balls will push you in their direction", 100, 410);
    ctx.fillText("- Vertically moving balls will knock you off of the platform", 100, 445);
    
    ctx.font = 'bold 30px arial';
    ctx.fillText("Good luck!!!", 75, 550);
    
    ctx.font = 'bold 20px arial';
    ctx.fillText("(If your screen height is smaller than 865 pixels, please consider zooming out to 80-90%)", 75, 600);
    
    ctx.font = 'bold 40px arial';
    ctx.fillText("Press ENTER to begin!", 275, 700);
    ctx.fill();

    ctx.font = 'bold 20px arial';
    ctx.fillText("Game design by Chris Joo", 730, 790);
    ctx.fillText("Music by INSECURE MUSIC", 20, 790);

    ctx.fill();
    
    beemo.onload = function() {
      ctx.drawImage(beemo, 200, 125, 33, 40);
    }
    finnRight.onload = function() {
      ctx.drawImage(finnRight, 0, 0, 32, 20, 215, 195, 64, 40);
    }
  }
};

export default welcomeModal;