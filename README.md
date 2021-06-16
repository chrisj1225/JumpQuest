# Jump Quest
## Background & Overview
A simple 2D retro-style platform game where the player must navigate through their environment, dodge obstacles and reach their goal.
* Jump Quest is a 2d platform game in which the player must navigate through their environment and reach the end of the level & beat the game. 
* There will be platforms that the user must jump on and moving obstacles that the user must dodge that will make the quest more difficult. 
* If at any point, the user makes a mistake and falls off of a platform, they will need to continue from where they landed. 
* [LIVE](https://chrisj1225.github.io/JumpQuest/)

![game](./gifs/jumpquest-complete.gif)

## Functionality & MVP's
In Jump Quest, users will be able to:
* Start a new game 
* Pause the game
* Restart the game
* Move using the arrow keys or WASD
  * Left (A) and right (D) to move
  * Down (S) to crouch
  * Spacebar (W) to jump

In addition, this project includes:
* Background music that the user can toggle on/off
* A togglable menu that explains the game control scheme
* Links to github repository, linkedin profile, angel list profile & personal portfolio

## Wireframes
* Sample level architecture: https://wireframe.cc/pro/pp/5b70db491446152
  * Orange rectangles: platforms for user to jump on
  * Grey circles: moving obstacles

## Collision Detection Algorithms
* The driving features of this game rely on the collision detection algorithms that determine if the user is standing on a platform or on the ground and if the user is in direct contact with an obstacle. 
* If the user is not standing on a platform or on the ground then they are falling. If the user is in contact with an obstacle, they should either be pushed in the direction of the horizontally moving obstacle or knocked back and pushed off of the platform from a vertically moving obstacle. 
### User & Platforms
```javascript
onPlatform(charPos, platform) {
    // platform = [posX, posY, width]
    if (this.crouching) {
      if (((charPos.x + this.width -15) >= platform[0]) &&
      ((charPos.x+15) <= (platform[0]+platform[2])) &&
      ((charPos.y + 20) <= platform[1]) &&
      ((charPos.y + 20) >= platform[1]-2)){
          return true
      };
    } else {
      if (((charPos.x + this.width -15) >= platform[0]) &&
      ((charPos.x+15) <= (platform[0]+platform[2])) &&
      ((charPos.y + 40) <= platform[1]) &&
      ((charPos.y + 40) >= platform[1]-2)){
          return true
      };
    };
  }
```

```javascript
    // check if char is standing on any platform
    // else check if char is falling below floor line
    // else char is currently falling
    for (let i=0; i<platforms.length; i++) {
      let platform = platforms[i];
      if (this.onPlatform(this.position, platform)) {
        this.falling = false;
        this.jumping = false;
        this.position.y = platform[1]-this.height;
        this.velocity.y = 0;
        break;
      } else if (this.position.y >= this.gameHeight-this.height-20) {
        this.jumping = false;
        this.falling = false;
        this.position.y = this.gameHeight - this.height - 20;
        this.velocity.y = 0;
        break;
      } else {
        this.falling = true;
      };
    }
```
### User & Obstacles
```javascript
collisionDetection(obstacle) {
    let o = {
      x: obstacle.position.x,
      y: obstacle.position.y,
      r: obstacle.radius
    };
    let c = {
      x: this.position.x + 20,
      y: this.position.y,
      w: this.width-30,
      h: this.height
    }

    // find horiz/vert distance b/w center of obstacle & character
    let distX = Math.abs(o.x - c.x - c.w/2);
    let distY = Math.abs(o.y - c.y - c.h/2);

    // return false if dist is greater than min dist b/w edges (x or y)
    if ((distX > (c.w/2 + o.r)) || (distY > (c.h/2 + o.r))) {return false};

    // return true if dist is <= char width/2
    if ((distX <= (c.w/2)) && (distY <= (c.h/2))) {return true};

    // dx & dy = dist b/w obstacle center & char edge (x & y)
    let dx = distX - c.w / 2;
    let dy = distY - c.h / 2;

    // use pythagorean theorem to see if radius^2  
    // is greater than hypotenuse of dx^2 + dy^2 
    // if greater, object and char are colliding (true)
    return (Math.pow(dx,2) + Math.pow(dy,2) <= Math.pow(o.r,2));
```
```javascript
    for (let i=0; i<obstacles.length; i++) {
      let obstacle = obstacles[i];
      if (this.collisionDetection(obstacle)) {
        this.isColliding = true;
        // setTimeout(() => {this.colliding = false}, 1000);

        if (obstacle.orientation == 'vertical') {
          if (this.direction == 'left') {
            this.position.x += 15;
            this.position.y += 1;
          } else {
            this.position.x -= 15;
            this.position.y += 1;
          }
        } else {
          if (obstacle.direction == "RD") {
            this.position.x += 20;
          } else if (obstacle.direction == "LU") {
            this.position.x -= 20;
          }
        }
        break;
      } else {
        this.isColliding = false;
      }
    }
```

## Architecture & Technologies
* JavaScript for game logic 
* Canvas for creating user model, platforms and moving obstacles 
* HTML and CSS for overall game structure & styling

## Bonus Features (Potential future features)
* A portal at the end (top) of the level that transports the user to another map/level
* Upon game start, show the top of the level and pan down to where the user begins the level
* Randomized obstacles
* Incorporate user health bar. Hitting obstacles or falling reduces health points. 

## Credits
* Finn Pixel [sprites](https://lhteam.itch.io/finn-sprite) by LHTeam
* Background [music](https://fanlink.to/insecuremusic) by Insecure Music

